import { Heart, ShoppingCart } from 'lucide-react'

export interface ProductCardProps {
  name: string
  price: number
  originalPrice?: number
  image: string
  badge?: 'new' | 'sale'
}

export function ProductCard({ name, price, originalPrice, image, badge }: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Image */}
      <div className="relative mb-3 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge */}
        {badge && (
          <span
            className={`absolute left-3 top-3 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
              badge === 'new' ? 'bg-green-500' : 'bg-red-400'
            }`}
          >
            {badge}
          </span>
        )}
        {/* Heart icon */}
        <button
          type="button"
          aria-label={`Add ${name} to favorites`}
          className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart className="h-5 w-5 text-gray-400 transition-colors hover:text-red-400" />
        </button>
      </div>

      {/* Info */}
      <h3 className="text-sm font-semibold text-ink">{name}</h3>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-sm font-bold text-primary-400">${price.toFixed(2)}</span>
        {originalPrice !== undefined && (
          <span className="text-xs text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
        )}
      </div>

      {/* Add to cart */}
      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center gap-2 bg-ink px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-400"
      >
        <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
        Add to cart
      </button>
    </div>
  )
}
