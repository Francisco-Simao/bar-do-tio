import { motion } from 'motion/react';
import { ChevronDown, MapPin } from 'lucide-react';

export function Hero() {
 

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.12,
        duration: 0.9,
        ease: [0.22, 0.9, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      aria-label="Bar do Tio — apresentação"
    >
      <div className="relative flex min-h-[100svh] w-full items-end md:min-h-[92svh] md:items-center">

        {/* FUNDO */}
        <div
          className="absolute inset-0 -z-50"
          style={{
            background: `
              radial-gradient(
                120% 60% at 50% 110%,
                #2f3724 0%,
                transparent 55%
              ),
              radial-gradient(
                80% 50% at 50% 35%,
                rgba(213, 77, 28, 0.35) 0%,
                transparent 60%
              ),
              linear-gradient(
                180deg,
                #0a0d07 0%,
                #14180f 30%,
                #1f2618 60%,
                #2f3724 100%
              )
            `,
          }}
        />

        {/* LUZ CENTRAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="pointer-events-none absolute left-1/2 top-[42%] -z-40 -translate-x-1/2 -translate-y-1/2"
          aria-hidden
        >
          <div
            className="h-[120vw] w-[120vw] max-h-[900px] max-w-[900px] rounded-full md:h-[70vw] md:w-[70vw]"
            style={{
              background:
                'radial-gradient(circle, rgba(239,148,97,.55) 0%, rgba(213,77,28,.35) 30%, rgba(168,122,64,.18) 55%, transparent 75%)',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>

        {/* MONTANHAS */}
        <svg
          className="absolute bottom-0 left-0 -z-30 h-[55%] w-full md:h-[60%]"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 360 L120 280 L220 320 L340 220 L460 290 L580 240 L720 300 L840 230 L960 290 L1100 240 L1240 310 L1360 270 L1440 320 L1440 600 L0 600 Z"
            fill="#1f2618"
            opacity="0.85"
          />

          <path
            d="M0 420 L100 360 L200 400 L320 320 L440 380 L560 340 L700 400 L820 350 L940 410 L1080 360 L1220 420 L1360 380 L1440 420 L1440 600 L0 600 Z"
            fill="#262622"
            opacity="0.95"
          />

          <path
            d="M0 490 L80 450 L180 480 L300 420 L420 470 L540 430 L680 480 L800 440 L920 490 L1060 450 L1200 500 L1320 460 L1440 500 L1440 600 L0 600 Z"
            fill="#0c0c0a"
          />
        </svg>

        {/* TEXTURA */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-film-grain opacity-40 mix-blend-overlay"
          aria-hidden
        />

        {/* VINHETA */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(10,13,7,.85) 100%)',
          }}
          aria-hidden
        />

        {/* =========================================
            CONTEÚDO DO HERO
        ========================================= */}
        <div className="relative z-10 w-full px-5 pb-20 pt-10 md:px-12 md:pb-0 md:pt-0 lg:px-20">

          <div className="mx-auto max-w-6xl">

            {/* IMAGEM ATRÁS DO TEXTO */}
            <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[-140px]
    -z-10
    flex
    w-[500px]
    -translate-x-1/2
    items-center
    justify-center
  "
>
  <img
    src="/hero-bar.svg"
    alt=""
    aria-hidden="true"
    className="w-full object-contain opacity-45 mix-blend-screen"
  />
</div>

            {/* SELO */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="mb-5 flex justify-center md:mb-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cream-200/20 bg-char-900/40 px-3 py-1.5 backdrop-blur-sm">
                <img
  src="/favicon.svg"
  alt=""
  className="w-10 h-10 object-contain"
  aria-hidden="true"
/>

                <span className="text-[10px] font-medium uppercase tracking-wider-3 text-cream-200 md:text-[11px]">
                  Cambuí · Minas Gerais
                </span>
              </div>
            </motion.div>

            {/* TÍTULO */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="
                text-center
                font-western
                text-[clamp(3.4rem,18vw,10rem)]
                leading-[0.85]
                text-cream-100
                md:text-[clamp(5rem,12vw,11rem)]
              "
              style={{
                textShadow:
                  '0 2px 0 rgba(0,0,0,.35), 0 12px 40px rgba(213,77,28,.18)',
              }}
            >
              BAR DO TIO
            </motion.h1>

            {/* SUBTÍTULO */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="mt-3 flex flex-col items-center gap-2 md:mt-5"
            >
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider-3 text-cream-200/70 md:text-xs">
                <span className="hidden h-px w-10 bg-cream-200/30 md:block" />

                <span>Parrilla</span>
                <span className="opacity-50">•</span>
                <span>American BBQ</span>
                <span className="opacity-50">•</span>
                <span>Minas</span>

                <span className="hidden h-px w-10 bg-cream-200/30 md:block" />
              </div>

              <p className="max-w-md text-center font-editorial text-base italic text-cream-200/85 md:text-xl">
                Tradição, fogo e sabor.
              </p>
            </motion.div>

            {/* DIVISOR */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="divider-leather mx-auto my-7 max-w-md md:my-9"
              aria-hidden
            />

            {/* BOTÃO */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="flex flex-col items-center gap-4"
            >
              <a
                href="#cardapio"
                className="group inline-flex items-center gap-3 rounded-sm bg-ember-600 px-7 py-3.5 text-sm font-medium uppercase tracking-wider-2 text-cream-50 shadow-[0_8px_28px_-8px_rgba(213,77,28,.6)] transition-all duration-300 hover:bg-ember-500"
              >
                <span>Ver Cardápio</span>

                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#localizacao"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider-2 text-cream-200/70 transition-colors hover:text-cream-100"
              >
                <MapPin className="h-3.5 w-3.5" />

                R. Silviano Brandão, 395 · Cambuí-MG
              </a>
            </motion.div>

          </div>
        </div>

        {/* SOMBRA INFERIOR */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-24"
          style={{
            background:
              'linear-gradient(to bottom, transparent, var(--bg-base))',
          }}
          aria-hidden
        />

      </div>
    </section>
  );
}