import { useState } from 'react'
import { Eye, Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { Product } from '../data'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
  onQuickView: (product: Product) => void
}

/** Product card: image with hover overlay (quick-view + wishlist hearts,
 *  slide-up "Add to cart" pill), name + price row below. */
export function ProductCard({ product, onAddToCart, onQuickView }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-loadmore">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-end justify-center bg-ink/40 pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="btn-pill-brand translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
          >
            Add to cart
          </button>
        </div>
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            type="button"
            aria-label={`Quick view ${product.name}`}
            onClick={() => onQuickView(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-soft shadow transition-colors hover:bg-brand hover:text-white"
          >
            <Eye className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={
              wishlisted
                ? `Remove ${product.name} from wishlist`
                : `Add ${product.name} to wishlist`
            }
            onClick={() => setWishlisted((value) => !value)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition-colors hover:text-brand',
              wishlisted ? 'text-brand' : 'text-ink-soft',
            )}
          >
            <Heart
              className="h-5 w-5"
              aria-hidden="true"
              fill={wishlisted ? 'currentColor' : 'none'}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <a href="#" className="text-[14px] text-ink-soft transition-colors hover:text-brand">
          {product.name}
        </a>
        <span className="text-[14px] font-medium text-ink-soft">${product.price.toFixed(2)}</span>
      </div>
    </article>
  )
}
