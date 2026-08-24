import { motion } from 'motion/react';
import type { MenuItem as MenuItemType } from '../../data/menu';
import { ProductLikeButton } from '../ProductLikeButton/ProductLikeButton';

// =============================================================
// MENU ITEM — Card editorial
// Layout mobile-first: imagem topo, nome, descrição, preço.
// Com ornamentos, linhas divisórias em couro e tipografia forte.
// =============================================================

interface Props {
  item: MenuItemType;
  index: number;
  onImageClick: (item: MenuItemType) => void;
}

export function MenuItem({ item, index, onImageClick }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: Math.min(index, 6) * 0.07,
        ease: [0.22, 0.9, 0.3, 1],
      }}
  className="group relative flex flex-col w-full max-w-[360px] mx-auto bg-char-900/60 border border-cream-200/8 hover:border-ember-500/40 transition-all duration-500 rounded-sm overflow-hidden min-w-0"
    >
      {/* Imagem com placeholder editorial */}
<button
  type="button"
  onClick={() => onImageClick(item)}
 className="relative aspect-[4/3] w-full overflow-hidden bg-char-800 text-left focus-visible:z-20"
  aria-label={`Ver detalhes de ${item.name || 'produto'}`}
>
  {item.image ? (
    <img
      src={item.image}
      alt={item.name}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-contain bg-char-800"
    />
  ) : (
    <PlaceholderArt highlight={item.highlight} />
  )}
        {/* vinheta */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 50%, rgba(12,12,10,0.65) 100%)',
          }}
          aria-hidden
        />
        {/* tag highlight */}
        {item.highlight && (
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-ember-600/90 text-cream-50 text-[9px] tracking-wider-3 uppercase font-medium rounded-sm">
            Da casa
          </div>
        )}
      </button>
      {/* botão de curtida independente para não acionar o detalhe */}
      <div className="absolute top-3 right-3 z-10">
        <ProductLikeButton productId={item.id} size="sm" variant="filled" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-2 p-4 md:p-5 min-w-0">
        <h3 className="font-editorial text-xl md:text-2xl text-cream-100 leading-tight break-words">
          {item.name}
        </h3>
        <div className="divider-leather my-1" aria-hidden />
        {item.description && <p className="font-sans text-sm md:text-[15px] text-cream-200/70 leading-relaxed break-words">{item.description}</p>}

        <div className="flex items-end justify-between mt-3 gap-2 min-w-0">
          {item.price && <span className="font-western text-lg md:text-xl text-ember-500 whitespace-nowrap">{item.price}</span>}
          <span className="text-[9px] tracking-wider-3 uppercase text-cream-200/40 whitespace-nowrap">
            Bar do Tio
          </span>
        </div>
      </div>

      {/* canto decorativo (estampa couro) */}
      <span
        className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-50"
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
        className="absolute inset-0 w-full h-full opacity-[0.25]"
        aria-hidden
      >
        <defs>
          <pattern
            id={`pat-${highlight ? 'h' : 'n'}`}
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
          fill={`url(#pat-${highlight ? 'h' : 'n'})`}
        />
      </svg>
      {/* monograma central */}
      <div className="relative font-western text-cream-100/85 text-5xl md:text-7xl">
        TIO
      </div>
      {/* ornamento */}
      <div
        className="absolute inset-x-0 bottom-3 text-center text-[9px] tracking-wider-3 uppercase text-cream-200/55"
        aria-hidden
      >
        Bar do Tio · Cardápio
      </div>
    </div>
  );
}
