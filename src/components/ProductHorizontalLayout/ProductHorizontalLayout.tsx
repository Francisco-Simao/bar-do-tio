import { motion } from 'motion/react';
import type { MenuItem as MenuItemType } from '../../data/menu';
import { ProductLikeButton } from '../ProductLikeButton/ProductLikeButton';

// =============================================================
// PRODUCT HORIZONTAL LAYOUT
// Segundo layout do cardápio — imagem à direita, conteúdo à
// esquerda. Inspirado no cardápio de steakhouse editorial.
// =============================================================

interface Props {
  item: MenuItemType;
  index: number;
}

export function ProductHorizontalLayout({ item, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 6) * 0.06,
        ease: [0.22, 0.9, 0.3, 1],
      }}
      className="
        group relative grid grid-cols-1
        sm:grid-cols-[minmax(0,1fr)_200px]
        md:grid-cols-[minmax(0,1fr)_230px]
        lg:grid-cols-[minmax(0,1fr)_260px]
        gap-0
        bg-char-900/55 border border-cream-200/8
        hover:border-ember-500/40
        rounded-sm overflow-hidden
        transition-all duration-500
      "
    >
      {/* Conteúdo (esquerda) */}
      <div className="flex flex-col justify-between p-4 md:p-5 lg:p-6 min-w-0">
        <div className="flex flex-col gap-1.5 md:gap-2">
          {item.highlight && (
            <span className="self-start inline-block px-2 py-0.5 bg-ember-600/90 text-cream-50 text-[9px] tracking-wider-3 uppercase font-medium rounded-sm">
              Da casa
            </span>
          )}

          <h3 className="font-editorial text-xl md:text-2xl lg:text-[26px] text-cream-100 leading-tight">
            {item.name}
          </h3>

          <div className="divider-leather my-0.5" aria-hidden />

          <p className="font-sans text-sm md:text-[15px] text-cream-200/70 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <span className="font-western text-lg md:text-xl text-ember-500">
            {item.price}
          </span>
          <span className="text-[9px] tracking-wider-3 uppercase text-cream-200/40 whitespace-nowrap">
            Bar do Tio
          </span>
        </div>
      </div>

      {/* Imagem (direita) */}
      <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full w-full overflow-hidden bg-char-800 min-h-[160px] sm:min-h-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <PlaceholderArt highlight={item.highlight} />
        )}

        {/* vinheta */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 55%, rgba(12,12,10,0.55) 100%)',
          }}
          aria-hidden
        />

        {/* like button sobre a imagem */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
          <ProductLikeButton productId={item.id} size="sm" variant="filled" />
        </div>
      </div>

      {/* canto decorativo (estampa couro) */}
      <span
        className="absolute top-0 left-0 w-12 h-12 pointer-events-none opacity-50 rotate-180"
        aria-hidden
      >
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <path
            d="M0 0 L48 0 L48 12 L12 12 L12 48 L0 48 Z"
            fill="#a07a40"
            opacity="0.15"
          />
        </svg>
      </span>
    </motion.article>
  );
}

// Placeholder visual — gera arte tipográfica para a imagem ausente.
function PlaceholderArt({ highlight }: { highlight?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* gradiente base quente */}
      <div
        className="absolute inset-0"
        style={{
          background: highlight
            ? 'linear-gradient(135deg, #2f3724 0%, #553c25 60%, #d54d1c 130%)'
            : 'linear-gradient(135deg, #1f2618 0%, #3e492f 50%, #6c4d2c 100%)',
        }}
      />
      {/* padrão pontilhado */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        aria-hidden
      >
        <defs>
          <pattern
            id={`hpat-${highlight ? 'h' : 'n'}`}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="0.8" fill="#e6cb8b" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#hpat-${highlight ? 'h' : 'n'})`}
        />
      </svg>
      {/* monograma central */}
      <div className="relative font-western text-cream-100/85 text-5xl md:text-7xl">
        TIO
      </div>
    </div>
  );
}
