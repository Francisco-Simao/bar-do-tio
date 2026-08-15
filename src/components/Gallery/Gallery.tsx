import { motion } from 'motion/react';

// =============================================================
// GALLERY / EXPERIÊNCIA
// Composição assimétrica — não é uma grade quadrada.
// 5 frames com tons diferentes (madeira, cobre, floresta).
// =============================================================

export function Gallery() {
  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="relative py-20 md:py-28 border-b border-cream-200/8 overflow-hidden"
    >
      {/* textura sutil */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            'radial-gradient(60% 40% at 20% 20%, rgba(160,122,64,0.18) 0%, transparent 60%), radial-gradient(50% 40% at 80% 80%, rgba(213,77,28,0.15) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 md:px-10">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <span className="text-[10px] md:text-[11px] tracking-wider-3 uppercase text-ember-500 font-editorial">
            A experiência
          </span>
          <h2
            id="experiencia-title"
            className="mt-3 font-western text-cream-100 text-3xl md:text-5xl leading-tight"
          >
            Dentro do Bar do Tio
          </h2>
          <p className="mt-4 max-w-xl font-editorial italic text-cream-200/70 text-lg md:text-xl">
            Luz baixa, madeira, chopp na mesa e o som de uma
            brasa que não apaga.
          </p>
        </motion.div>

        {/* Composição assimétrica */}
        <div className="grid grid-cols-12 grid-rows-6 md:grid-rows-5 gap-3 md:gap-4 h-[480px] md:h-[600px]">
          <Tile
            className="col-span-7 row-span-3 md:row-span-3"
            tone="ember"
            label="Parrilla"
            i={0}
          />
          <Tile
            className="col-span-5 row-span-2 md:row-span-2"
            tone="wood"
            label="Cerveja"
            i={1}
          />
          <Tile
            className="col-span-5 row-span-2 md:row-span-2"
            tone="forest"
            label="Drinks"
            i={2}
          />
          <Tile
            className="col-span-7 row-span-2 md:row-span-2"
            tone="copper"
            label="Carne"
            i={3}
          />
          <Tile
            className="col-span-12 row-span-1 md:row-span-1 hidden md:block"
            tone="char"
            label="Ambiente"
            i={4}
          />
        </div>
      </div>
    </section>
  );
}

function Tile({
  className,
  tone,
  label,
  i,
}: {
  className?: string;
  tone: 'ember' | 'wood' | 'forest' | 'copper' | 'char';
  label: string;
  i: number;
}) {
  const palettes = {
    ember: 'linear-gradient(135deg, #3e160d 0%, #8a2d13 50%, #d54d1c 110%)',
    wood: 'linear-gradient(135deg, #241910 0%, #6c4d2c 50%, #a07a40 110%)',
    forest: 'linear-gradient(135deg, #14180f 0%, #2f3724 50%, #525f3d 110%)',
    copper: 'linear-gradient(135deg, #29130c 0%, #69311d 50%, #a8542c 110%)',
    char: 'linear-gradient(135deg, #181814 0%, #3a3a33 50%, #7c7c75 110%)',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
      className={`relative overflow-hidden rounded-sm group ${className ?? ''}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0"
        style={{ background: palettes[tone] }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        aria-hidden
      >
        <defs>
          <pattern
            id={`tile-${tone}-${i}`}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="0.6" fill="#e6cb8b" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#tile-${tone}-${i})`}
        />
      </svg>
      {/* monograma */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-western text-cream-100/60 text-3xl md:text-5xl">
          TIO
        </span>
      </div>
      {/* vinheta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 40%, rgba(10,13,7,0.7) 100%)',
        }}
        aria-hidden
      />
      {/* tag */}
      <div className="absolute bottom-3 left-3 text-[10px] tracking-wider-3 uppercase text-cream-200/85">
        {label}
      </div>
    </motion.div>
  );
}
