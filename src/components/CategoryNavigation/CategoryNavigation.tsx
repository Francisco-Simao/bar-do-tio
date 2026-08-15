import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menu } from '../../data/menu';

// =============================================================
// NAVEGAÇÃO STICKY DE CATEGORIAS
// - Horizontal swipe
// - Indicador da categoria ativa
// - Highlight animado
// - Acessível: usa links com hash para saltar às seções
// =============================================================

export function CategoryNavigation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState<string>(menu[0]?.id ?? '');

  // Atualiza a categoria ativa com base na seção visível
  useEffect(() => {
    const sections = menu
      .map((c) => document.getElementById(`cat-${c.id}`))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pega a entrada mais visível
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
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

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Centraliza a categoria ativa ao clicar
  const handleClick = (id: string) => {
    setActiveId(id);
    const el = containerRef.current?.querySelector<HTMLButtonElement>(
      `button[data-id="${id}"]`,
    );
    if (el && containerRef.current) {
      const parent = containerRef.current;
      const left = el.offsetLeft - parent.clientWidth / 2 + el.clientWidth / 2;
      parent.scrollTo({ left, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="cardapio"
      className="sticky top-0 z-30 backdrop-blur-md bg-char-950/85 border-y border-cream-200/10 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.6)]"
      role="navigation"
      aria-label="Navegação do cardápio"
    >
      <div
        ref={containerRef}
        className="no-scrollbar flex overflow-x-auto gap-1 px-4 md:px-10 py-3 md:py-3.5 scroll-smooth"
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
      <AnimatePresence>
        {/* faixa fina âmbar como detalhe */}
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
