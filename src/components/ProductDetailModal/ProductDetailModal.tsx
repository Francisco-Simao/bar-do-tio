import { AnimatePresence, motion } from 'motion/react';
import { Star, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { MenuItem as MenuItemType } from '../../data/menu';
import { ProductLikeButton } from '../ProductLikeButton/ProductLikeButton';

interface Props {
  item: MenuItemType | null;
  onClose: () => void;
}

export function ProductDetailModal({ item, onClose }: Props) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (!item) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${item.name}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Fechar detalhes"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/75 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative z-10 max-h-[calc(100svh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-sm border border-cream-200/15 bg-char-950 shadow-[0_25px_80px_rgba(0,0,0,0.65)] sm:max-h-[calc(100svh-2rem)]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-cream-200/20 bg-char-950/80 text-cream-100 backdrop-blur-md transition-colors hover:border-ember-500 hover:bg-ember-600"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative aspect-[4/3] min-h-[220px] overflow-hidden bg-char-800 sm:min-h-[280px] md:aspect-auto md:min-h-[470px]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#1f2618_0%,#3e492f_50%,#6c4d2c_100%)]">
                    <span className="font-western text-6xl text-cream-100/80">TIO</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/55 to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8">
                {item.highlight && (
                  <span className="mb-3 self-start rounded-sm bg-ember-600 px-2 py-1 text-[9px] font-medium uppercase tracking-wider-3 text-cream-50">
                    Da casa
                  </span>
                )}
                <p className="mb-2 text-[10px] uppercase tracking-wider-3 text-cream-200/45">
                  Bar do Tio
                </p>
                <h3 className="font-western text-3xl leading-tight text-cream-100 md:text-4xl">
                  {item.name}
                </h3>
                <div className="my-5 h-px bg-gradient-to-r from-ember-500/70 to-transparent" />
                {item.description && (
                  <p className="font-sans text-sm leading-relaxed text-cream-200/75 md:text-base">
                    {item.description}
                  </p>
                )}
                {item.price && <span className="mt-6 font-western text-2xl text-ember-500">{item.price}</span>}

                <div className="mt-6 border-t border-cream-200/10 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-editorial text-base italic text-cream-200/75">
                      Deixe sua avaliação para este item
                    </p>
                    <ProductLikeButton productId={item.id} size="sm" variant="subtle" />
                  </div>
                  <div className="mt-3 flex items-center gap-1" role="radiogroup" aria-label={`Avaliar ${item.name}`}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        role="radio"
                        aria-checked={rating === star}
                        aria-label={`${star} estrela${star > 1 ? 's' : ''}`}
                        onClick={() => setRating(star)}
                        className="p-1 text-cream-200/45 transition-colors hover:text-ember-500 focus-visible:text-ember-500"
                      >
                        <Star className={`h-5 w-5 ${star <= rating ? 'fill-ember-500 text-ember-500' : ''}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
