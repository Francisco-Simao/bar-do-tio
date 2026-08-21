import { motion, useScroll, useTransform } from 'motion/react';

export function Header() {
  const { scrollY } = useScroll();

  // Header aparece somente depois de sair do topo
  const opacity = useTransform(scrollY, [150, 250], [0, 1]);
  const blur = useTransform(scrollY, [150, 250], [0, 12]);
  const height = useTransform(scrollY, [150, 250], [56, 64]);

  return (
    <motion.header
      style={{
        height,
        opacity,
      }}
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
    >
      <motion.div
        style={{
          backdropFilter: useTransform(
            blur,
            (v) => `blur(${v}px)`
          ),
        }}
        className="w-full h-full bg-char-950/0 border-b border-transparent"
      >
        <div className="relative w-full h-full">

          {/* Fundo do Header */}
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 bg-char-950/90 border-b border-cream-200/10"
            aria-hidden
          />

          {/* Conteúdo */}
          <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-5 md:px-10 flex items-center justify-between pointer-events-auto gap-3">

            {/* LOGO — ESQUERDA */}
            <a
              href="#hero"
              className="flex items-center min-w-0"
              aria-label="Bar do Tio — início"
            >
              <img
                src="/favicon.svg"
                alt="Bar do Tio"
                className="w-auto h-10 sm:h-12 md:h-14 object-contain"
              />
            </a>

            {/* CARDÁPIO — DIREITA */}
            <a
              href="#cardapio"
              className="shrink-0 inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-ember-600/90 hover:bg-ember-500 text-cream-50 text-[11px] md:text-xs tracking-wider-2 uppercase rounded-sm transition-colors"
            >
              Cardápio
            </a>

          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}