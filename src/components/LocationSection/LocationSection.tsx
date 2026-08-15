import { motion } from 'motion/react';
import { MapPin, Phone, Navigation } from 'lucide-react';

// =============================================================
// LOCATION SECTION
// Endereço, telefone, botão "Como chegar" (preparado p/ Maps).
// =============================================================

export function LocationSection() {
  const address =
    'R. Silviano Brandão, 395, Cambuí - MG, 37600-000';
  const phone = '(35) 3431-4638';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bar do Tio, ' + address,
  )}`;

  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-title"
      className="relative py-20 md:py-28 border-b border-cream-200/8 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 0%, rgba(213,77,28,0.15) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-14"
        >
          <span className="text-[10px] md:text-[11px] tracking-wider-3 uppercase text-ember-500 font-editorial">
            Onde estamos
          </span>
          <h2
            id="localizacao-title"
            className="mt-3 font-western text-cream-100 text-3xl md:text-5xl"
          >
            Venha sentar à mesa
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Informações */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-char-900 border border-cream-200/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-ember-500" />
              </div>
              <div>
                <p className="text-[10px] tracking-wider-3 uppercase text-cream-200/55 mb-1">
                  Endereço
                </p>
                <p className="font-editorial text-xl text-cream-100 leading-snug">
                  {address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-sm bg-char-900 border border-cream-200/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-ember-500" />
              </div>
              <div>
                <p className="text-[10px] tracking-wider-3 uppercase text-cream-200/55 mb-1">
                  Telefone
                </p>
                <a
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="font-editorial text-xl text-cream-100 hover:text-ember-500 transition"
                >
                  {phone}
                </a>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex self-start items-center gap-2 px-5 py-3 bg-ember-600 hover:bg-ember-500 text-cream-50 text-[11px] tracking-wider-3 uppercase rounded-sm transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Como chegar
            </a>
          </motion.div>

          {/* Mapa / arte */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-cream-200/10"
            role="img"
            aria-label="Mapa do Bar do Tio"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, #14180f 0%, #262622 50%, #553c25 100%)',
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              aria-hidden
            >
              <defs>
                <pattern
                  id="map-grid"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 32 0 L 0 0 0 32"
                    fill="none"
                    stroke="#dde2d2"
                    strokeWidth="0.4"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
            </svg>
            {/* marcador central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-ember-600 flex items-center justify-center shadow-[0_0_0_8px_rgba(213,77,28,0.18)]">
                  <MapPin className="w-5 h-5 text-cream-50" />
                </div>
                <span className="font-western text-cream-100 text-lg">
                  BAR DO TIO
                </span>
                <span className="text-[10px] tracking-wider-3 uppercase text-cream-200/65">
                  Cambuí · MG
                </span>
              </div>
            </div>
            {/* placeholder tag */}
            <div className="absolute bottom-3 right-3 text-[9px] tracking-wider-3 uppercase text-cream-200/55">
              Mapa interativo em breve
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
