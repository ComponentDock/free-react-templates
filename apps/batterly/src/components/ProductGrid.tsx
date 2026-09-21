import { PRODUCTS } from '../data'
import { ShoppingBag } from 'lucide-react'

export function ProductGrid() {
  return (
    <section id="shop" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-brand">
            Our Products
          </span>
          <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold text-ink">
            Cake & Pastry Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div key={product.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${product.seed}/400/400`}
                alt={product.name}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Category badge */}
              <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                {product.category}
              </span>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full transition-transform group-hover:translate-y-0">
                <a
                  href="#shop"
                  className="font-display text-lg font-semibold hover:text-brand transition-colors"
                >
                  {product.name}
                </a>
                <p className="mt-1 text-sm">${product.price}</p>
              </div>
              {/* Add to cart */}
              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-brand-dark"
              >
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
