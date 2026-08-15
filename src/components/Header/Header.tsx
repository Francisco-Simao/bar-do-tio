import { motion, useScroll, useTransform } from 'motion/react';
import { Flame } from 'lucide-react';

// =============================================================
// HEADER — seleto, fixo, com revelação sutil no scroll.
// Mostra o nome reduzido do bar (monograma) + acesso ao cardápio.
// =============================================================

export function Header() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const blur = useTransform(scrollY, [0, 200], [0, 12]);
  const height = useTransform(scrollY, [0, 200], [56, 64]);

  return (
    <motion.header
      style={{ height }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <motion.div
        style={{
          backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className="w-full h-full bg-char-950/0 border-b border-transparent"
      >
        <div className="relative w-full h-full">
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 bg-char-950/85 border-b border-cream-200/10"
            aria-hidden
          />
          <div className="relative h-full max-w-6xl mx-auto px-5 md:px-10 flex items-center justify-between">
            <a
              href="#hero"
              className="flex items-center gap-2 text-cream-100"
              aria-label="Bar do Tio — início"
            >
              <Flame className="w-4 h-4 text-ember-500" />
              <span className="font-western tracking-wide text-sm md:text-base">
                BAR DO TIO
              </span>
            </a>
            <nav
              className="hidden md:flex items-center gap-7 text-[11px] tracking-wider-2 uppercase text-cream-200/70"
              aria-label="Navegação principal"
            >
              <a href="#cardapio" className="hover:text-cream-100 transition">
                Cardápio
              </a>
              <a href="#historia" className="hover:text-cream-100 transition">
                História
              </a>
              <a
                href="#experiencia"
                className="hover:text-cream-100 transition"
              >
                Ambiente
              </a>
              <a
                href="#localizacao"
                className="hover:text-cream-100 transition"
              >
                Contato
              </a>
            </nav>
            <a
              href="#cardapio"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-ember-600/90 hover:bg-ember-500 text-cream-50 text-[11px] tracking-wider-2 uppercase rounded-sm transition-colors"
            >
              Cardápio
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
