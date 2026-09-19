import { Star, ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  colors: number
  sizes: number
  badge?: 'BESTSELLER' | 'NEW'
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Air Max Pulse',
    category: 'Running',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.2,
    reviews: 234,
    colors: 4,
    sizes: 8,
    badge: 'BESTSELLER',
    image: 'https://picsum.photos/seed/lacecraft-product-1/400/400',
  },
  {
    id: 2,
    name: 'Classic Runner Pro',
    category: 'Sneakers',
    price: 129.99,
    rating: 4.6,
    reviews: 189,
    colors: 3,
    sizes: 7,
    badge: 'NEW',
    image: 'https://picsum.photos/seed/lacecraft-product-2/400/400',
  },
  {
    id: 3,
    name: 'Court Dominator',
    category: 'Basketball',
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.9,
    reviews: 312,
    colors: 5,
    sizes: 9,
    badge: 'BESTSELLER',
    image: 'https://picsum.photos/seed/lacecraft-product-3/400/400',
  },
  {
    id: 4,
    name: 'Trail Blazer X',
    category: 'Running',
    price: 139.99,
    rating: 4.7,
    reviews: 156,
    colors: 3,
    sizes: 8,
    image: 'https://picsum.photos/seed/lacecraft-product-4/400/400',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            'h-4 w-4',
            star <= Math.round(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300',
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function FeaturedCollection() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Featured Collection
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Our most popular styles handpicked for you
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
            >
              {/* Badge */}
              {product.badge && (
                <span
                  className={cn(
                    'absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase',
                    product.badge === 'BESTSELLER'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-900 text-white dark:bg-white dark:text-gray-900',
                  )}
                >
                  {product.badge}
                </span>
              )}

              {/* Discount */}
              {product.originalPrice && (
                <span className="absolute right-3 top-3 z-10 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) / product.originalPrice) * 100,
                  )}
                  %
                </span>
              )}

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Add to Cart overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-600"
                  >
                    <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-xs font-medium uppercase text-primary-500">{product.category}</p>
                <h3 className="mt-1 font-display text-base font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <StarRating rating={product.rating} />
                  <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">
                  <span>{product.colors} colors</span>
                  <span>•</span>
                  <span>{product.sizes} sizes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
