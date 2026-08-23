import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, Star, X } from 'lucide-react';
import type { MenuItem } from '../../data/menu';
import { ProductLikeButton } from '../ProductLikeButton/ProductLikeButton';

interface Props {
  item: MenuItem | null;
  onClose: () => void;
}

const ratingKey = (productId: string) => `bar-do-tio:product-rating:${productId}`;

function readRating(productId: string) {
  try {
    const value = Number(localStorage.getItem(ratingKey(productId)));
    return value >= 1 && value <= 5 ? value : 0;
  } catch {
    return 0;
  }
}

export function ProductDetailModal({ item, onClose }: Props) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (!item) return;
    setRating(readRating(item.id));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [item, onClose]);

  const chooseRating = (value: number) => {
    if (!item) return;
    setRating(value);
    try {
      localStorage.setItem(ratingKey(item.id), String(value));
    } catch {
      // A interface continua funcional mesmo se o armazenamento estiver bloqueado.
    }
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-char-950/85 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          role="presentation"
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-detail-title"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 0.9, 0.3, 1] }}
            className="relative max-h-[94svh] w-full overflow-y-auto border border-cream-200/10 bg-char-900 shadow-2xl sm:max-w-2xl sm:rounded-sm"
          >
            <div className="relative aspect-[16/10] min-h-[220px] overflow-hidden bg-char-800 sm:aspect-[16/9]">
              {item.image ? (
                <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#1f2618,#553c25_65%,#181814)]">
                  <span className="font-western text-6xl text-cream-100/80">TIO</span>
                </div>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,10,0.35),transparent_45%,rgba(12,12,10,0.45))]" />
              <button type="button" onClick={onClose} className="absolute left-3 top-3 inline-flex min-h-11 min-w-11 items-center justify-center border border-cream-200/20 bg-char-950/70 text-cream-100 transition-colors hover:border-ember-500 hover:text-ember-500" aria-label="Voltar ao cardápio">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={onClose} className="absolute right-3 top-3 hidden min-h-11 min-w-11 items-center justify-center border border-cream-200/20 bg-char-950/70 text-cream-100 transition-colors hover:border-ember-500 hover:text-ember-500 sm:inline-flex" aria-label="Fechar detalhes">
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 right-3"><ProductLikeButton productId={item.id} variant="filled" /></div>
            </div>

            <div className="p-5 sm:p-7">
              <span className="text-[10px] tracking-wider-3 uppercase text-ember-500">Bar do Tio · Cardápio</span>
              <h2 id="product-detail-title" className="mt-2 font-editorial text-3xl leading-tight text-cream-100 sm:text-4xl">{item.name || 'Produto'}</h2>
              {item.description && <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream-200/70 sm:text-[15px]">{item.description}</p>}
              {item.price && <p className="mt-5 font-western text-2xl text-ember-500">{item.price}</p>}

              <div className="mt-6 border-t border-cream-200/10 pt-5">
                <p className="font-editorial text-lg text-cream-100">Deixe sua avaliação para este item</p>
                <div className="mt-3 flex gap-1" role="radiogroup" aria-label="Avaliação do produto">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button key={value} type="button" role="radio" aria-checked={rating === value} onClick={() => chooseRating(value)} className="p-1 text-cream-200/40 transition-colors hover:text-ember-500" aria-label={`${value} estrelas`}>
                      <Star className={`h-7 w-7 ${value <= rating ? 'fill-ember-500 text-ember-500' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
