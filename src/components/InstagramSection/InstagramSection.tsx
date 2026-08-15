import { motion } from 'motion/react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// =============================================================
// INSTAGRAM SECTION
// Composição visual para fotos (placeholders) + botão
// para o perfil real. Integração automática NÃO implementada.
// =============================================================

export function InstagramSection() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: `ig-${i}`,
    label: ['Parrilla', 'Drinks', 'Chopp', 'Burguer', 'Petiscos', 'Brasa'][i],
    tone: (
      ['ember', 'wood', 'forest', 'copper', 'wood', 'ember'] as const
    )[i],
  }));

  return (
    <section
      aria-labelledby="instagram-title"
      className="relative py-20 md:py-28 border-b border-cream-200/8"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 md:mb-14"
        >
          <span className="text-[10px] md:text-[11px] tracking-wider-3 uppercase text-ember-500 font-editorial">
            Siga o Bar do Tio
          </span>
          <h2
            id="instagram-title"
            className="mt-3 font-western text-cream-100 text-3xl md:text-5xl"
          >
            @bardotiocambui
          </h2>
          <p className="mt-4 max-w-md font-editorial italic text-cream-200/70 text-lg">
            Bastidores, brasa do dia e novidades da casa.
          </p>
        </motion.div>

        {/* Grid de placeholders (substituir por imagens reais do Instagram) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative aspect-square overflow-hidden rounded-sm group cursor-pointer"
              role="img"
              aria-label={`Post ${it.label}`}
            >
              <Tile tone={it.tone} />
              <div className="absolute inset-0 bg-char-950/0 group-hover:bg-char-950/45 transition-colors flex items-center justify-center">
                <InstagramIcon className="w-7 h-7 text-cream-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="absolute bottom-2 left-2 text-[9px] tracking-wider-3 uppercase text-cream-100/85 z-10">
                {it.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Botão */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="https://instagram.com/bardotiocambui"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cream-200/20 hover:border-ember-500 text-cream-100 hover:text-ember-500 text-[11px] tracking-wider-3 uppercase rounded-sm transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Tile({ tone }: { tone: 'ember' | 'wood' | 'forest' | 'copper' }) {
  const palettes = {
    ember: 'linear-gradient(135deg, #3e160d 0%, #8a2d13 50%, #d54d1c 110%)',
    wood: 'linear-gradient(135deg, #241910 0%, #6c4d2c 50%, #a07a40 110%)',
    forest: 'linear-gradient(135deg, #14180f 0%, #2f3724 50%, #525f3d 110%)',
    copper: 'linear-gradient(135deg, #29130c 0%, #69311d 50%, #a8542c 110%)',
  };

  return (
    <>
      <div className="absolute inset-0" style={{ background: palettes[tone] }} />
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        aria-hidden
      >
        <defs>
          <pattern
            id={`ig-${tone}`}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="0.6" fill="#e6cb8b" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ig-${tone})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-western text-cream-100/55 text-2xl md:text-3xl">
          TIO
        </span>
      </div>
    </>
  );
}
