import { motion } from 'motion/react';

// =============================================================
// INTRO SECTION
// Apresentação rápida logo após o hero — antes do cardápio.
// Cita as raízes do bar: 20 anos, parrilla, BBQ, Minas.
// =============================================================

export function IntroSection() {
  return (
    <section
      aria-label="Apresentação do Bar do Tio"
      className="relative py-16 md:py-24 border-b border-cream-200/8"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(70% 50% at 50% 0%, rgba(213,77,28,0.18) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-5 md:px-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[10px] md:text-[11px] tracking-wider-3 uppercase text-ember-500 font-editorial"
        >
          Cambuí · Minas Gerais
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 font-western text-cream-100 text-3xl md:text-5xl leading-tight"
        >
          20 anos acendendo<br />a brasa.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 md:mt-7 mx-auto max-w-2xl font-editorial italic text-cream-200/80 text-lg md:text-xl leading-relaxed"
        >
          Um bar de esquina que virou ponto de encontro.
          Parrilla, defumação, chopp tirado, música tocando —
          e o fogão sempre aceso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {[
            'Parrilla',
            'American BBQ',
            'Comida Mineira',
            'Burguer Artesanal',
            'Drinks',
            'Chopp',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[10px] tracking-wider-3 uppercase border border-cream-200/15 text-cream-200/70 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
