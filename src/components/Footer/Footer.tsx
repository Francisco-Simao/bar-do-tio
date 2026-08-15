import { Flame, MapPin, Phone } from 'lucide-react';

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
// FOOTER — elegante e simples.
// Mostra identidade, contato e frase "Tradição, fogo e sabor."
// =============================================================

export function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Rodapé"
      className="relative pt-16 md:pt-20 pb-10"
    >
      {/* textura couro */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, #0c0c0a 30%, #14180f 100%)',
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 md:px-10">
        {/* Frase emblemática */}
        <div className="text-center mb-12">
          <p className="font-editorial italic text-cream-200/85 text-2xl md:text-4xl">
            “Tradição, fogo e sabor.”
          </p>
          <div className="mt-4 mx-auto max-w-xs divider-leather" aria-hidden />
        </div>

        {/* Bloco identidade */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 items-start">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2 text-cream-100">
              <Flame className="w-5 h-5 text-ember-500" />
              <span className="font-western text-2xl">BAR DO TIO</span>
            </div>
            <p className="font-editorial text-cream-200/65 text-base md:text-lg">
              Cambuí · Minas Gerais
            </p>
            <p className="text-cream-200/45 text-xs tracking-wider-2 uppercase">
              Parrilla · American BBQ
            </p>
          </div>

          <nav
            className="flex flex-col items-center gap-3"
            aria-label="Links do rodapé"
          >
            <span className="text-[10px] tracking-wider-3 uppercase text-cream-200/50">
              Contato
            </span>
            <a
              href="tel:+553534314638"
              className="inline-flex items-center gap-2 font-editorial text-cream-100 hover:text-ember-500 text-lg transition"
            >
              <Phone className="w-4 h-4" />
              (35) 3431-4638
            </a>
            <a
              href="https://instagram.com/bardotiocambui"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-editorial text-cream-100 hover:text-ember-500 text-lg transition"
            >
              <InstagramIcon className="w-4 h-4" />
              @bardotiocambui
            </a>
            <a
              href="#localizacao"
              className="inline-flex items-center gap-2 font-editorial text-cream-100 hover:text-ember-500 text-lg transition"
            >
              <MapPin className="w-4 h-4" />
              Como chegar
            </a>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-[10px] tracking-wider-3 uppercase text-cream-200/50">
              Endereço
            </span>
            <address className="not-italic font-editorial text-cream-200/85 text-base md:text-lg text-center md:text-right leading-snug">
              R. Silviano Brandão, 395
              <br />
              Cambuí - MG
              <br />
              37600-000
            </address>
          </div>
        </div>

        {/* Linha final */}
        <div className="mt-12 pt-6 border-t border-cream-200/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] tracking-wider-3 uppercase text-cream-200/40">
            © {new Date().getFullYear()} Bar do Tio · Todos os direitos reservados
          </p>
          <p className="text-[10px] tracking-wider-3 uppercase text-cream-200/40">
            Cardápio digital · feito com fogo
          </p>
        </div>
      </div>
    </footer>
  );
}
