import { ShoppingCart, Star } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

interface ProductCardProps {
  name: string
  price: number
  rating: number
  seed: string
  badge?: string
}

export function ProductCard({ name, price, rating, seed, badge }: ProductCardProps) {
  return (
    <article className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
        <img
          src={`https://picsum.photos/seed/${seed}/800/800`}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={800}
        />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold text-white">
            {badge}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-gray-900 dark:text-white">{name}</h3>
          <div
            className="mt-1 flex items-center gap-1"
            role="img"
            aria-label={`Rated ${rating} out of 5`}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className={cn(
                  'h-4 w-4',
                  index < Math.round(rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700',
                )}
                aria-hidden="true"
              />
            ))}
            <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
        <p className="text-lg font-bold text-gray-900 dark:text-white">${price}</p>
      </div>
      <Button className="mt-4 w-full rounded-full" aria-label={`Add ${name} to cart`}>
        <ShoppingCart className="h-4 w-4" aria-hidden="true" />
        Add to Cart
      </Button>
    </article>
  )
}
