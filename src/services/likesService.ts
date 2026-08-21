// =============================================================
// LIKES SERVICE
// -------------------------------------------------------------
// Serviço compartilhado de curtidas para os produtos do cardápio.
//
// IMPORTANTE: a contagem geral deve ser COMPARTILHADA entre
// todos os clientes. NÃO usar apenas localStorage para isso.
//
// Arquitetura:
// 1. Tabela `products` (id, likes_count)    -> contagem geral
// 2. Tabela `product_likes` (id, product_id, device_id, created_at)
//
// Este projeto não possui backend configurado por padrão.
// O serviço abaixo foi projetado para conversar com a
// API REST do Supabase automaticamente se as variáveis de
// ambiente forem definidas:
//   VITE_SUPABASE_URL
//   VITE_SUPABASE_ANON_KEY
//
// Se NÃO estiverem configuradas, o serviço entra em modo
// "demo local": persiste likes em localStorage (apenas para
// o próprio dispositivo) e mantém uma contagem agregada em
// memória para simulação visual.
//
// Configuração do Supabase:
// 1. Criar projeto em https://supabase.com
// 2. Criar tabela `products`:
//    - id            text primary key
//    - likes_count   integer default 0
// 3. Criar tabela `product_likes`:
//    - id            bigserial primary key
//    - product_id    text references products(id)
//    - device_id     text
//    - created_at    timestamptz default now()
// 4. Habilitar RLS e criar policies para permitir:
//    - SELECT público em ambas
//    - UPDATE em products.likes_count (via service role)
//    - INSERT em product_likes (anon)
// 5. Definir VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env
// =============================================================

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? '';
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? '';
const STORAGE_KEY = 'bar-do-tio:likes:v1';
const DEVICE_KEY = 'bar-do-tio:device-id:v1';

export const isSupabaseConfigured = (): boolean =>
  Boolean(SUPABASE_URL) && Boolean(SUPABASE_ANON_KEY);

// ----- device identifier (sem autenticação) --------------------------
function getDeviceId(): string {
  try {
    let id = localStorage.getItem(DEVICE_KEY);

    if (!id) {
      id =
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : `dev-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;

      localStorage.setItem(DEVICE_KEY, id);
    }

    return id;
  } catch {
    return `dev-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
  }
}

// ----- local fallback (caso Supabase não esteja configurado) ---------
interface LocalState {
  counts: Record<string, number>;
  likedByDevice: Record<string, string[]>; // productId -> [deviceIds]
  likedByDeviceSelf: Record<string, true>; // productId que o device local curtiu
}

function readLocalState(): LocalState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) return { counts: {}, likedByDevice: {}, likedByDeviceSelf: {} };

    const parsed = JSON.parse(raw) as Partial<LocalState>;

    return {
      counts: parsed.counts ?? {},
      likedByDevice: parsed.likedByDevice ?? {},
      likedByDeviceSelf: parsed.likedByDeviceSelf ?? {},
    };
  } catch {
    return { counts: {}, likedByDevice: {}, likedByDeviceSelf: {} };
  }
}

function writeLocalState(state: LocalState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota errors */
  }
}

// ----- API ----------------------------------------------------------
export interface LikesSnapshot {
  count: number;
  likedByMe: boolean;
}

type Listener = (snap: LikesSnapshot) => void;
const listeners = new Map<string, Set<Listener>>();

function notify(productId: string, snap: LikesSnapshot) {
  listeners.get(productId)?.forEach((cb) => cb(snap));
}

export function subscribeLikes(
  productId: string,
  cb: Listener,
): () => void {
  const set = listeners.get(productId) ?? new Set<Listener>();
  set.add(cb);
  listeners.set(productId, set);

  // dispara o estado inicial
  void getLikes(productId).then((snap) => cb(snap));

  return () => {
    set.delete(cb);
  };
}

export async function getLikes(
  productId: string,
): Promise<LikesSnapshot> {
  if (isSupabaseConfigured()) {
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/products?select=likes_count&id=eq.${encodeURIComponent(productId)}`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        },
      );

      if (!res.ok) throw new Error('supabase fetch failed');
      const rows = (await res.json()) as Array<{ likes_count: number }>;
      const count = rows[0]?.likes_count ?? 0;

      const liked = await hasLiked(productId);

      return { count, likedByMe: liked };
    } catch {
      // cai no fallback
    }
  }

  const state = readLocalState();

  return {
    count: state.counts[productId] ?? 0,
    likedByMe: Boolean(state.likedByDeviceSelf[productId]),
  };
}

export async function hasLiked(productId: string): Promise<boolean> {
  if (isSupabaseConfigured()) {
    try {
      const deviceId = getDeviceId();
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/product_likes?select=id&product_id=eq.${encodeURIComponent(productId)}&device_id=eq.${encodeURIComponent(deviceId)}&limit=1`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        },
      );

      if (!res.ok) throw new Error('supabase fetch failed');
      const rows = (await res.json()) as unknown[];
      return Array.isArray(rows) && rows.length > 0;
    } catch {
      const state = readLocalState();
      return Boolean(state.likedByDeviceSelf[productId]);
    }
  }

  const state = readLocalState();
  return Boolean(state.likedByDeviceSelf[productId]);
}

export async function toggleLike(
  productId: string,
): Promise<LikesSnapshot> {
  const deviceId = getDeviceId();

  if (isSupabaseConfigured()) {
    try {
      // verifica se já curtiu
      const existing = await fetch(
        `${SUPABASE_URL}/rest/v1/product_likes?select=id&product_id=eq.${encodeURIComponent(productId)}&device_id=eq.${encodeURIComponent(deviceId)}&limit=1`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        },
      );

      if (!existing.ok) throw new Error('supabase fetch failed');
      const rows = (await existing.json()) as Array<{ id: number }>;
      const already = rows.length > 0;

      if (already) {
        // descurtir: deleta like e decrementa contador
        await fetch(
          `${SUPABASE_URL}/rest/v1/product_likes?product_id=eq.${encodeURIComponent(productId)}&device_id=eq.${encodeURIComponent(deviceId)}`,
          {
            method: 'DELETE',
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          },
        );

        await fetch(
          `${SUPABASE_URL}/rest/v1/rpc/decrement_likes`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ p_id: productId }),
          },
        ).catch(() => undefined);
      } else {
        // curtir: insere like e incrementa contador
        await fetch(`${SUPABASE_URL}/rest/v1/product_likes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ product_id: productId, device_id: deviceId }),
        });

        await fetch(
          `${SUPABASE_URL}/rest/v1/rpc/increment_likes`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ p_id: productId }),
          },
        ).catch(() => undefined);
      }

      const snap = await getLikes(productId);
      notify(productId, snap);
      return snap;
    } catch {
      // cai no fallback
    }
  }

  // fallback local (não compartilhado entre clientes)
  const state = readLocalState();
  const liked = Boolean(state.likedByDeviceSelf[productId]);

  if (liked) {
    delete state.likedByDeviceSelf[productId];
    state.counts[productId] = Math.max(0, (state.counts[productId] ?? 0) - 1);
  } else {
    state.likedByDeviceSelf[productId] = true;
    state.counts[productId] = (state.counts[productId] ?? 0) + 1;
  }

  writeLocalState(state);

  const snap: LikesSnapshot = {
    count: state.counts[productId] ?? 0,
    likedByMe: !liked,
  };

  notify(productId, snap);
  return snap;
}
