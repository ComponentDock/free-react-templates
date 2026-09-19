import { Eye, Heart, ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ProductCardProps {
  name: string
  price: number
  oldPrice?: number
  image: string
  rating?: number
  hot?: boolean
}

export function ProductCard({ name, price, oldPrice, image, rating = 4, hot }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded border border-gray-200 bg-white">
      {hot && (
        <span className="absolute left-2 top-2 z-10 rounded bg-brand px-2 py-0.5 text-xs font-bold text-white">
          HOT
        </span>
      )}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            className="rounded-full bg-white p-2 text-ink hover:bg-brand hover:text-white transition-colors"
            aria-label={`Quick view ${name}`}
          >
            <Eye size={16} />
          </button>
          <button
            className="rounded-full bg-white p-2 text-ink hover:bg-brand hover:text-white transition-colors"
            aria-label={`Add ${name} to wishlist`}
          >
            <Heart size={16} />
          </button>
          <button
            className="rounded-full bg-white p-2 text-ink hover:bg-brand hover:text-white transition-colors"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
      <div className="p-3">
        <h3 className="mb-1 text-sm font-semibold text-ink">
          <a href="#" className="hover:text-brand transition-colors">
            {name}
          </a>
        </h3>
        <div className="mb-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn('text-xs', i < rating ? 'text-yellow-400' : 'text-gray-300')}
            >
              ★
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-brand">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-xs text-gray-400 line-through">${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
