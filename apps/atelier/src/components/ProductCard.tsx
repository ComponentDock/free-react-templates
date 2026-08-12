import { Eye, Heart, ShoppingCart, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import type { Badge, Product } from '../data'

const badgeStyles: Record<Exclude<Badge, null>, string> = {
  new: 'bg-sale text-white',
  sale: 'bg-brand text-white',
  sold: 'bg-ink text-white',
}

const badgeLabels: Record<Exclude<Badge, null>, string> = {
  new: 'NEW',
  sale: 'SALE',
  sold: 'OUT OF STOCK',
}

/* product card — 3/4 photo, badge top-left, name, star rating, price with
   strikethrough old price on sale items, and a hover-revealed action icon
   row (quick view / wishlist / cart), mirroring the original. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-tint">
        <img
          src={`https://picsum.photos/seed/${product.seed}/800/1000`}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={cn(
              'absolute left-4 top-4 rounded px-3 py-1 text-xs font-semibold uppercase',
              badgeStyles[product.badge],
            )}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-white/90 py-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            aria-label={`Quick view ${product.name}`}
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-brand hover:text-white"
          >
            <Eye className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to wishlist`}
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-brand hover:text-white"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-brand hover:text-white"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <h3 className="mt-4 text-base font-medium text-ink dark:text-white">{product.name}</h3>
      <div className="mt-1 flex items-center gap-1" aria-label={`${product.rating} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((index) => (
          <Star
            key={index}
            aria-hidden="true"
            className={cn('h-4 w-4', index < product.rating ? 'fill-star text-star' : 'text-faded')}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-bold text-ink dark:text-white">
          ${product.price.toFixed(2)}
        </span>
        {product.oldPrice && (
          <span className="text-sm text-faded line-through">${product.oldPrice.toFixed(2)}</span>
        )}
      </div>
    </article>
  )
}
