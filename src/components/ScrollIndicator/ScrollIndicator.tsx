import { motion, useScroll, useTransform } from 'motion/react';

// =============================================================

// SCROLL INDICATOR

// Indicação elegante de "continue rolando para baixo".

// Aparece sobre o banner inicial e desaparece conforme o

// usuário rola a página (efeito sutil, fade + bounce).

// Inspirado em identidade western/steakhouse do Bar do Tio.

// =============================================================

export function ScrollIndicator() {

  const { scrollY } = useScroll();

  // fade-out entre 0 e ~180px

  const opacity = useTransform(scrollY, [0, 180], [1, 0]);

  const y = useTransform(scrollY, [0, 180], [0, 12]);

  return (

    <motion.a

      href="#cardapio"

      aria-label="Rolar para o cardápio"

      style={{ opacity, y }}

     className="absolute left-1/2 -bottom-100 sm:-bottom-20 z-30 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-200/80 hover:text-ember-500 transition-colors"

    >

      <span className="text-[9px] sm:text-[10px] tracking-wider-3 uppercase font-editorial">

        Role para baixo

      </span>

      {/* moldura de "mouse" estilizada */}

      <span className="relative flex h-9 w-[26px] items-start justify-center rounded-full border border-cream-200/40 pt-1.5">

        <motion.span

          aria-hidden

          animate={{ y: [0, 8, 0], opacity: [0.95, 0.3, 0.95] }}

          transition={{

            duration: 1.8,

            repeat: Infinity,

            ease: 'easeInOut',

          }}

          className="h-1.5 w-1 rounded-full bg-cream-200/85"

        />

      </span>

      {/* seta discreta */}

      <motion.svg

        aria-hidden

        animate={{ y: [0, 4, 0] }}

        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}

        width="14"

        height="14"

        viewBox="0 0 24 24"

        fill="none"

        stroke="currentColor"

        strokeWidth="2"

        strokeLinecap="round"

        strokeLinejoin="round"

        className="text-cream-200/70"

      >

        <path d="M6 9l6 6 6-6" />

      </motion.svg>

    </motion.a>

  );

}