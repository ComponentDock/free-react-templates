import { Heart, ShoppingCart } from 'lucide-react'

const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: 'Long Sleeve T-Shirt',
  price: '$150.00',
  seed: `sarto-product-${(i % 5) + 1}`,
}))

function ProductCard({ name, price, seed }: { name: string; price: string; seed: string }) {
  return (
    <div className="min-w-[200px] flex-shrink-0">
      <div className="group relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${seed}/300/380`}
          alt={name}
          className="h-[280px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
          <button
            type="button"
            aria-label="Add to wishlist"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-brand-500 hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Add to cart"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-colors hover:bg-brand-500 hover:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-sm font-medium text-gray-900">{name}</h4>
        <h5 className="mt-1 text-sm text-brand-500">{price}</h5>
      </div>
    </div>
  )
}

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Title */}
        <div className="mx-auto mb-10 max-w-lg text-center">
          <h2 className="mb-3 text-3xl font-medium text-gray-900">Featured Products</h2>
          <p className="text-sm text-gray-500">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        {/* Product grid — horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {products.map((p) => (
            <ProductCard key={p.id} name={p.name} price={p.price} seed={p.seed} />
          ))}
        </div>

        {/* Pagination */}
        <nav aria-label="Product pages" className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="Previous page"
            className="px-3 py-1 text-sm text-gray-400 hover:text-brand-500"
          >
            &lsaquo;
          </button>
          {[1, 2, 3, '...', 9].map((p, i) => (
            <button
              key={i}
              type="button"
              aria-label={typeof p === 'number' ? `Page ${p}` : 'More pages'}
              className={`px-3 py-1 text-sm ${
                p === 1 ? 'bg-brand-500 text-white' : 'text-gray-500 hover:text-brand-500'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            aria-label="Next page"
            className="px-3 py-1 text-sm text-gray-400 hover:text-brand-500"
          >
            &rsaquo;
          </button>
        </nav>
      </div>
    </section>
  )
}
