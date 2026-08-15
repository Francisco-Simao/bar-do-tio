import { motion } from 'motion/react';

// =============================================================
// STORY SECTION
// Layout editorial assimétrico: texto + duas imagens
// (placeholders prontos para substituição futura).
// =============================================================

export function StorySection() {
  return (
    <section
      id="historia"
      aria-labelledby="historia-title"
      className="relative py-20 md:py-28 border-b border-cream-200/8"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 order-2 md:order-1"
          >
            <span className="text-[10px] md:text-[11px] tracking-wider-3 uppercase text-ember-500 font-editorial">
              Nossa história
            </span>
            <h2
              id="historia-title"
              className="mt-3 font-western text-cream-100 text-3xl md:text-5xl leading-tight"
            >
              Antes do balcão,<br />o fogão.
            </h2>
            <div className="mt-5 max-w-xl space-y-4 font-editorial text-cream-200/80 text-lg md:text-xl leading-relaxed">
              <p>[INSIRA A HISTÓRIA DO BAR DO TIO AQUI]</p>
              <p>
                Conte como o bar nasceu, o que motivou a escolha pelo
                fogo, pela parrilla e pela defumação, e por que o
                Cambuí continua sendo o endereço certo.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-ember-500/60" />
              <span className="text-[10px] tracking-wider-3 uppercase text-cream-200/55">
                Bar do Tio · desde [ANO]
              </span>
            </div>
          </motion.div>

          {/* Imagens */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5 order-1 md:order-2 relative"
          >
            <div className="relative aspect-[4/5] w-full">
              <FrameArt label="Imagem principal" tone="ember" />
              <div className="absolute -bottom-8 -left-6 w-2/3 aspect-[4/3] border border-cream-200/15 rounded-sm overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
                <FrameArt label="Imagem opcional" tone="forest" small />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FrameArt({
  label,
  tone,
  small,
}: {
  label: string;
  tone: 'ember' | 'forest';
  small?: boolean;
}) {
  const bg =
    tone === 'ember'
      ? 'linear-gradient(160deg, #2f3724 0%, #553c25 60%, #8a2d13 100%)'
      : 'linear-gradient(160deg, #1f2618 0%, #3e492f 60%, #866234 100%)';

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0" style={{ background: bg }} />
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        aria-hidden
      >
        <defs>
          <pattern
            id={`p-${tone}`}
            x="0"
            y="0"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="0.7" fill="#e6cb8b" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#p-${tone})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-western text-cream-100/70 ${small ? 'text-2xl' : 'text-4xl'}`}
        >
          TIO
        </span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] tracking-wider-3 uppercase text-cream-200/55">
        <span>Bar do Tio</span>
        <span>{label}</span>
      </div>
    </div>
  );
}
