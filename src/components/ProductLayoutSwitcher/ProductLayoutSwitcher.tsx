import { motion } from 'motion/react';
import { LayoutGrid, Rows3 } from 'lucide-react';
import type { ProductLayout } from '../MenuSection/MenuSection';

// =============================================================
// PRODUCT LAYOUT SWITCHER
// Botões que alternam entre o layout em grade (cards) e o
// layout horizontal (lista editorial com imagem à direita).
// A preferência é persistida em localStorage para o cliente.
// =============================================================

const STORAGE_KEY = 'bar-do-tio:product-layout:v1';

export function loadProductLayout(): ProductLayout {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'horizontal' || raw === 'grid') return raw;
  } catch {
    /* ignore */
  }
  return 'grid';
}

export function saveProductLayout(layout: ProductLayout) {
  try {
    localStorage.setItem(STORAGE_KEY, layout);
  } catch {
    /* ignore */
  }
}

interface Props {
  value: ProductLayout;
  onChange: (next: ProductLayout) => void;
}

export function ProductLayoutSwitcher({ value, onChange }: Props) {
  const options: Array<{
    id: ProductLayout;
    label: string;
    Icon: typeof LayoutGrid;
  }> = [
    { id: 'grid', label: 'Lista', Icon: LayoutGrid },
    { id: 'horizontal', label: 'Foto', Icon: Rows3 },
  ];

  return (
    <div
      className="mx-auto flex w-fit items-center gap-2 rounded-full border border-cream-200/10 bg-char-900/60 p-1 backdrop-blur-sm"
      role="tablist"
      aria-label="Estilo de visualização do cardápio"
    >
      <span className="px-2 text-[10px] tracking-wider-3 uppercase text-cream-200/55 hidden sm:inline">
        Visualização
      </span>

      {options.map(({ id, label, Icon }) => {
        const active = value === id;

        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(id)}
            className={`relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] md:text-xs tracking-wider-2 uppercase transition-colors duration-300 ${
              active
                ? 'text-cream-50'
                : 'text-cream-200/65 hover:text-cream-100'
            }`}
          >
            {active && (
              <motion.span
                layoutId="layout-pill"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 32,
                }}
                className="absolute inset-0 rounded-full bg-ember-600/90 border border-ember-500"
                aria-hidden
              />
            )}

            <Icon className="relative z-10 h-3.5 w-3.5" />
            <span className="relative z-10 whitespace-nowrap">
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
