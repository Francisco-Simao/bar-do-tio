import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import {
  subscribeLikes,
  toggleLike,
  type LikesSnapshot,
} from '../../services/likesService';

// =============================================================
// PRODUCT LIKE BUTTON
// Botão de curtida estilo Instagram, integrado com likesService.
// A contagem é compartilhada via Supabase (se configurado) ou
// fica em modo local de demonstração caso contrário.
// =============================================================

interface Props {
  productId: string;
  size?: 'sm' | 'md';
  /** Variante visual — útil para combinar com layouts diferentes. */
  variant?: 'subtle' | 'filled';
}

export function ProductLikeButton({
  productId,
  size = 'md',
  variant = 'subtle',
}: Props) {
  const [snap, setSnap] = useState<LikesSnapshot>({
    count: 0,
    likedByMe: false,
  });
  const [pending, setPending] = useState(false);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    const unsub = subscribeLikes(productId, (s) => setSnap(s));
    return () => {
      unsub();
    };
  }, [productId]);

  const handle = async () => {
    if (pending) return;
    setPending(true);

    // dispara o "burst" do coração antes mesmo do servidor responder
    setBurst((b) => b + 1);

    try {
      const next = await toggleLike(productId);
      setSnap(next);
    } finally {
      setPending(false);
    }
  };

  const dim =
    size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]';
  const pad =
    size === 'sm' ? 'px-2 py-1 text-[11px]' : 'px-2.5 py-1.5 text-xs';

  const base =
    variant === 'filled'
      ? 'bg-char-900/70 border border-cream-200/10 hover:border-ember-500/50'
      : 'bg-transparent border border-cream-200/10 hover:border-ember-500/40';

  return (
    <button
      type="button"
      onClick={handle}
      aria-pressed={snap.likedByMe}
      aria-label={
        snap.likedByMe ? 'Remover curtida' : 'Curtir este produto'
      }
      className={`group inline-flex items-center gap-1.5 rounded-full ${pad} ${base} text-cream-200/80 transition-colors duration-300 hover:text-cream-100`}
    >
      <span className="relative inline-flex items-center justify-center">
        <motion.span
          key={`heart-${burst}`}
          initial={{ scale: 0.9 }}
          animate={{
            scale: snap.likedByMe ? [1, 1.35, 1] : [1, 0.92, 1],
          }}
          transition={{ duration: 0.35, ease: [0.22, 0.9, 0.3, 1] }}
          className="inline-flex"
        >
          <Heart
            className={`${dim} transition-colors duration-300 ${
              snap.likedByMe
                ? 'fill-ember-500 text-ember-500'
                : 'text-cream-200/70 group-hover:text-ember-500'
            }`}
          />
        </motion.span>

        {/* pequena onda sutil ao curtir */}
        <AnimatePresence>
          {snap.likedByMe && (
            <motion.span
              key={`ring-${burst}`}
              initial={{ opacity: 0.5, scale: 0.6 }}
              animate={{ opacity: 0, scale: 1.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="pointer-events-none absolute inset-0 rounded-full border border-ember-500/70"
              aria-hidden
            />
          )}
        </AnimatePresence>
      </span>

      <span className="font-editorial tabular-nums tracking-wide">
        {snap.count}
      </span>
    </button>
  );
}
