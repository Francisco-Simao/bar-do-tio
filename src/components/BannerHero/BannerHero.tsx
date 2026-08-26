import { motion } from 'motion/react';

import { MapPin } from 'lucide-react';



export function BannerHero() {
  return (
    <section
      id="banner"
      className="relative w-full"
      aria-label="Bar do Tio — banner principal"
    >
      {/* ================= BANNER (imagem principal) ================= */}
      <div className="relative z-10 w-full h-[340px] sm:h-[400px] md:h-[460px] lg:h-[560px] overflow-hidden bg-char-950">
        <motion.img
          src="/banner-bar.jpg"
          alt="Bar do Tio — ambiente"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 0.9, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Vinheta sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,13,7,0.35) 0%, rgba(10,13,7,0.10) 35%, rgba(10,13,7,0.55) 100%)',
          }}
          aria-hidden
        />

        {/* Textura */}
        <div
          className="absolute inset-0 pointer-events-none bg-film-grain opacity-25 mix-blend-overlay"
          aria-hidden
        />

        {/* Indicador de scroll */}
      </div>

      {/* ================= FAIXA INFERIOR ================= */}
      <div className="relative z-20 bg-char-950">

        {/* IMAGEM DECORATIVA NO FUNDO */}
        <img
          src="/hero-bar.svg"
          alt=""
          aria-hidden="true"
          className="
    pointer-events-none
    absolute
    left-1/2
    top-[0px]
    -translate-x-1/2
    z-0
    w-[500px]
    sm:w-[650px]
    md:w-[800px]
    lg:w-[950px]
    max-w-none
    opacity-30
    mix-blend-screen
  "
        />

        {/* Linha âmbar superior */}
        <div
          className="absolute top-0 left-0 right-0 h-px z-10"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(213,77,28,0.0) 8%, rgba(213,77,28,0.55) 50%, rgba(213,77,28,0.0) 92%, transparent 100%)',
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 pt-10 pb-8 md:pt-12 md:pb-10">

          {/* ===== LOGO ===== */}
         <div className="flex justify-center">
  <motion.a
    href="#hero"
    aria-label="Bar do Tio — início"
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.9,
      delay: 0.2,
      ease: [0.22, 0.9, 0.3, 1],
    }}
    className="relative -mt-[115px] sm:-mt-[130px] md:-mt-[145px] lg:-mt-[160px] z-50 shrink-0"
  >
    <img
      src="/logo-bar-do-tio.svg"
      alt="Bar do Tio"
      className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
    />
  </motion.a>
</div>
          {/* ===== CONTEÚDO DO HERO ===== */}
          <div className="relative mt-6 md:mt-8 flex flex-col items-center text-center">



            {/* SELO */}
            <div className="mb-5 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cream-200/20 bg-char-900/40 px-3 py-1.5 backdrop-blur-sm">
                <img
                  src="/favicon.svg"
                  alt=""
                  className="w-8 h-8 object-contain"
                  aria-hidden="true"
                />

                <span className="text-[10px] font-medium uppercase tracking-wider-3 text-cream-200 md:text-[11px]">
                  Cambuí · Minas Gerais
                </span>
              </div>
            </div>

            {/* TÍTULO */}
            <h1
              className="text-center text-cream-100 leading-[0.85] text-[clamp(3.4rem,18vw,8rem)] md:text-[clamp(5rem,12vw,9rem)]"
              style={{
                fontFamily: 'Empera, serif',
                textShadow:
                  '0 2px 0 rgba(0,0,0,0.35), 0 12px 40px rgba(213,77,28,0.18)',
              }}
            >
              BAR DO TIO
            </h1>

            {/* SUBTÍTULO */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider-3 text-cream-200/70 md:text-xs">
                <span className="hidden h-px w-10 bg-cream-200/30 md:block" />

                <span>BBQ</span>
                <span className="opacity-50">•</span>
                <span>PARRILHA</span>
                <span className="opacity-50">•</span>
                <span>BEER</span>
                <span className="opacity-50">•</span>
                <span>DRINK</span>

                <span className="hidden h-px w-10 bg-cream-200/30 md:block" />
              </div>

              <p className="max-w-md text-center font-editorial text-base italic text-cream-200/85 md:text-xl">
                Tradição, fogo e sabor.
              </p>
            </div>

            {/* DIVISOR */}
            <div
              className="divider-leather mx-auto my-6 w-full max-w-md"
              aria-hidden
            />

            {/* BOTÃO */}
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-3 rounded-sm bg-ember-600 px-7 py-3.5 text-sm font-medium uppercase tracking-wider-2 text-cream-50 shadow-[0_8px_28px_-8px_rgba(213,77,28,.6)] transition-all duration-300 hover:bg-ember-500"
            >
              <span>Ver Cardápio</span>

              <span className="text-lg leading-none transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>

            {/* LOCALIZAÇÃO */}
            <a
              href="#localizacao"
              className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider-2 text-cream-200/70 transition-colors hover:text-cream-100"
            >
              <MapPin className="h-3.5 w-3.5" />
              R. Silviano Brandão, 395 · Cambuí-MG
            </a>
          </div>


          {/* ===== ORNAMENTO WESTERN DISCRETO ===== */}
          <div
            className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-4"
            aria-hidden
          >
            <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-ember-500/60 to-ember-500/70" />

            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              className="text-ember-500"
              fill="currentColor"
            >
              <path d="M7 0 L8.6 5.4 L14 7 L8.6 8.6 L7 14 L5.4 8.6 L0 7 L5.4 5.4 Z" />
            </svg>

            <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-ember-500/60 to-ember-500/70" />
          </div>

          {/* ===== REDES SOCIAIS ===== */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-5">

            <div className="flex items-center justify-center gap-5 md:gap-6">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="group inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 transition-all duration-300 hover:scale-110 focus-visible:scale-110"
              >
                <img
                  src="/icons/instagram.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain transition-all duration-300 brightness-0 invert"
                  style={{
                    filter:
                      'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(0deg)',
                  }}
                />
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="group inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 transition-all duration-300 hover:scale-110 focus-visible:scale-110"
              >
                <img
                  src="/icons/whatsapp.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                  style={{
                    filter:
                      'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(0deg)',
                  }}
                />
              </a>

            </div>
          </div>

        </div>

        {/* Textura sutil na faixa */}
        <div
          className="pointer-events-none absolute inset-0 bg-film-grain opacity-20 mix-blend-overlay"
          aria-hidden
        />

      </div>
    </section>
  );
}