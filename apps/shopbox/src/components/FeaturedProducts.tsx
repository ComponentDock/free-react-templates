import { Star, ShoppingCart, Heart } from 'lucide-react'

const PRODUCTS = [
  {
    id: 1,
    name: 'Minimal Watch',
    price: 129,
    originalPrice: 169,
    rating: 4.5,
    image: 'https://picsum.photos/seed/shopbox-p1/400/400',
  },
  {
    id: 2,
    name: 'Leather Tote Bag',
    price: 89,
    originalPrice: null,
    rating: 4.2,
    image: 'https://picsum.photos/seed/shopbox-p2/400/400',
  },
  {
    id: 3,
    name: 'Running Sneakers',
    price: 145,
    originalPrice: 189,
    rating: 4.8,
    image: 'https://picsum.photos/seed/shopbox-p3/400/400',
  },
  {
    id: 4,
    name: 'Linen Shirt',
    price: 55,
    originalPrice: null,
    rating: 4.0,
    image: 'https://picsum.photos/seed/shopbox-p4/400/400',
  },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < fullStars
              ? 'fill-yellow-400 text-yellow-400'
              : i === fullStars && hasHalf
                ? 'fill-yellow-400/50 text-yellow-400'
                : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export function FeaturedProducts() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-primary-500">Featured Products</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative mb-3 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition group-hover:opacity-100">
                  <button
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow transition hover:bg-primary-500 hover:text-white"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                  <button
                    aria-label={`Add ${product.name} to wishlist`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow transition hover:bg-primary-500 hover:text-white"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-semibold text-accent">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="mt-1">
                  <StarRating rating={product.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
