import { motion } from 'motion/react';
import type { MenuCategory } from '../../data/menu';
import { MenuItem } from '../MenuItem/MenuItem';
import { ProductHorizontalLayout } from '../ProductHorizontalLayout/ProductHorizontalLayout';

// =============================================================
// MENU SECTION
// Título da categoria → separador ornamentado → grid de items.
// Aceita `layout` para alternar entre o card vertical (grid)
// e o card horizontal (lista editorial com imagem à direita).
// =============================================================

export type ProductLayout = 'grid' | 'horizontal';

interface Props {
  category: MenuCategory;
  layout?: ProductLayout;
}

export function MenuSection({ category, layout = 'grid' }: Props) {
  const isHorizontal = layout === 'horizontal';

  return (
    <section
      id={`cat-${category.id}`}
      aria-labelledby={`title-${category.id}`}
      className="relative scroll-mt-32 md:scroll-mt-24 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-10">
        {/* Cabeçalho da categoria */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-8 md:mb-12"
        >
          <span className="text-[10px] md:text-[11px] tracking-wider-3 uppercase text-cream-200/50 font-editorial">
            Cardápio
          </span>
          <h2
            id={`title-${category.id}`}
            className="font-western text-cream-100 text-3xl md:text-5xl mt-2"
          >
            {category.label}
          </h2>
          {category.tagline && (
            <p className="font-editorial italic text-cream-200/70 text-base md:text-lg mt-2 max-w-md">
              {category.tagline}
            </p>
          )}
          {/* ornamento */}
          <div className="mt-5 flex items-center gap-3 w-full max-w-xs">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-ember-500/60" />
            <Flame />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-ember-500/60" />
          </div>
        </motion.header>

        {/* Grid de produtos */}
        {isHorizontal ? (
          <div className="flex flex-col gap-5 md:gap-6">
            {category.items.map((item, i) => (
              <ProductHorizontalLayout
                key={item.id}
                item={item}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {category.items.map((item, i) => (
              <MenuItem key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Flame() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2 C 14 6 18 8 18 13 C 18 17 15 21 12 21 C 9 21 6 17 6 13 C 6 10 8 8 9 7 C 10 9 11 10 12 9 C 12 6 11 4 12 2 Z"
        fill="#d54d1c"
        opacity="0.9"
      />
      <path
        d="M12 9 C 13 11 14 12 14 14 C 14 16 13 18 12 18 C 11 18 10 16 10 14 C 10 12 11 11 12 9 Z"
        fill="#e6cb8b"
      />
    </svg>
  );
}
