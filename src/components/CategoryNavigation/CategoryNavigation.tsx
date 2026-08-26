import { useEffect, useRef, useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';

import { menu } from '../../data/menu';

export function CategoryNavigation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string>(menu[0]?.id ?? '');
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Detecta qual categoria está atualmente visível
  useEffect(() => {
    const sections = menu
      .map((c) => document.getElementById(`cat-${c.id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) -
              (a.intersectionRatio ?? 0),
          );

        if (visible[0]) {
          const id = visible[0].target.id.replace('cat-', '');
          setActiveId(id);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sections.forEach((section) => obs.observe(section));

    return () => obs.disconnect();
  }, []);

  // Mostra a indicação por alguns segundos e depois desaparece
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowScrollHint(false);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, []);

  // Clique em uma categoria
  const handleClick = (id: string) => {
    setActiveId(id);

    // Centraliza o botão na barra horizontal
    const button =
      containerRef.current?.querySelector<HTMLButtonElement>(
        `button[data-id="${id}"]`,
      );

    if (button && containerRef.current) {
      const parent = containerRef.current;

      const left =
        button.offsetLeft -
        parent.clientWidth / 2 +
        button.clientWidth / 2;

      parent.scrollTo({
        left,
        behavior: 'smooth',
      });
    }

    // Rola até a categoria
    const section = document.getElementById(`cat-${id}`);

    if (section) {
      const offset = 70;

      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }

    // Ao clicar, não precisamos mais da dica
    setShowScrollHint(false);
  };

  return (
    <div
      className="sticky top-14 md:top-16 z-30 w-full backdrop-blur-md bg-char-950/95 border-y border-cream-200/10 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.6)]"
      role="navigation"
      aria-label="Navegação do cardápio"
    >
      <div className="relative">
        <div
          ref={containerRef}
          className="no-scrollbar flex overflow-x-auto gap-1 px-4 md:px-10 pt-4 pb-3 md:pt-4.5 md:pb-3 scroll-smooth"
          style={{ scrollSnapType: 'x proximity' }}
        >
          {menu.map((cat) => {
            const active = activeId === cat.id;

            return (
              <button
                key={cat.id}
                data-id={cat.id}
                onClick={() => handleClick(cat.id)}
                style={{ scrollSnapAlign: 'center' }}
                className={`relative shrink-0 px-4 md:px-5 py-2 rounded-full text-[11px] md:text-xs tracking-wider-2 uppercase font-medium transition-colors duration-300 ${
                  active
                    ? 'text-cream-50'
                    : 'text-cream-200/65 hover:text-cream-100'
                }`}
                aria-current={active ? 'true' : undefined}
                aria-label={`Ir para ${cat.label}`}
              >
                {active && (
                  <motion.span
                    layoutId="cat-pill"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-ember-600/90 border border-ember-500"
                    aria-hidden
                  />
                )}

                <span className="relative z-10 whitespace-nowrap">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Indicação animada para arrastar horizontalmente */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.4 }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 rounded-full border border-cream-200/15 bg-char-950/95 px-2.5 py-1.5 text-cream-100/80 shadow-lg md:hidden pointer-events-none"
              aria-hidden="true"
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-sm leading-none text-ember-500"
              >
                →
              </motion.span>

              <span className="text-[8px] uppercase tracking-wider-2 whitespace-nowrap">
                Arraste
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Frase explicativa */}
        <div className="flex justify-center px-4 pb-4">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-cream-200/45 font-editorial whitespace-nowrap">
            Role para ao lado para ver mais opções
          </p>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          key="ember-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-ember-500/40 to-transparent origin-left"
          aria-hidden
        />
      </AnimatePresence>
    </div>
  );
}