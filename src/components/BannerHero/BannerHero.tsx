import { motion } from 'motion/react';

/**
 * BannerHero — faixa inicial do Bar do Tio.
 *
 * Identidade: steakhouse / western sóbrio.
 * - Banner principal: /banner-bar.jpg
 * - Logo sobreposta:   /logo-bar-do-tio.svg
 * - Faixa inferior:    char-950 com ornamento âmbar discreto
 * - Botão cardápio:    leva para #cardapio
 * - Redes sociais:     /icons/instagram.svg e /icons/whatsapp.svg
 *
 * Os hrefs de Instagram e WhatsApp estão como "#".
 * Substituir pelos links oficiais quando estiverem definidos.
 */

export function BannerHero() {
  return (
    <section
      id="banner"
      className="relative w-full"
      aria-label="Bar do Tio — banner principal"
    >
      {/* ================= BANNER (imagem principal) ================= */}
      <div className="relative w-full h-[340px] sm:h-[400px] md:h-[460px] lg:h-[560px] overflow-hidden bg-char-950">
        <motion.img
          src="/banner-bar.jpg"
          alt="Bar do Tio — ambiente"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 0.9, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Vinheta sutil — melhora leitura sem cobrir a imagem */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,13,7,0.35) 0%, rgba(10,13,7,0.10) 35%, rgba(10,13,7,0.55) 100%)',
          }}
          aria-hidden
        />

        {/* Textura sutil (film grain já existe no tailwind) */}
        <div
          className="absolute inset-0 pointer-events-none bg-film-grain opacity-25 mix-blend-overlay"
          aria-hidden
        />
      </div>

      {/* ================= FAIXA INFERIOR (steakhouse) ================= */}
      <div className="relative bg-char-950">
        {/* Linha âmbar superior — detalhe discreto */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(213,77,28,0.0) 8%, rgba(213,77,28,0.55) 50%, rgba(213,77,28,0.0) 92%, transparent 100%)',
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-10 pb-8 md:pt-12 md:pb-10">
          {/* ===== LOGO — sobrepõe a transição banner/faixa ===== */}
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="#hero"
              aria-label="Bar do Tio — início"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.9, 0.3, 1] }}
              className="relative -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 z-20 shrink-0"
            >
              <img
                src="/logo-bar-do-tio.svg"
                alt="Bar do Tio"
                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
              />
            </motion.a>
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

          {/* ===== REDES SOCIAIS + CARDÁPIO ===== */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between">
            {/* Lado esquerdo / topo: redes sociais */}
            <div className="flex items-center justify-center gap-5 md:gap-6">
              {/* Instagram — substituir href pelo link oficial */}
              <a
                href="#"
                aria-label="Instagram"
                className="group inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 transition-all duration-300 hover:scale-110 focus-visible:scale-110"
              >
                <img
                  src="/icons/instagram.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain transition-all duration-300 brightness-0 invert group-hover:sepia group-hover:saturate-[6] group-hover:hue-rotate-[-10deg]"
                  style={{
                    // cream-100 (branco) → ember-500 no hover
                    filter:
                      'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(0deg)',
                  }}
                />
              </a>

              {/* WhatsApp — substituir href pelo número oficial (wa.me/55...) */}
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
                    // cream-100 → ember-500 no hover (controlado pelo group-hover inline)
                    filter:
                      'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(0deg)',
                  }}
                />
              </a>
            </div>

            {/* Lado direito / baixo: botão cardápio */}
            <motion.a
              href="#cardapio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 0.9, 0.3, 1] }}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-ember-600 hover:bg-ember-500 text-cream-50 text-sm md:text-base uppercase tracking-wider-2 rounded-sm transition-all duration-300 shadow-[0_10px_32px_-10px_rgba(213,77,28,0.55)] hover:shadow-[0_14px_38px_-10px_rgba(213,77,28,0.75)]"
            >
              <span>Cardápio</span>
              <span className="inline-block text-lg leading-none transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </motion.a>
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
