import { Heart, Layers, ShoppingCart, Maximize2 } from 'lucide-react'

const products = [
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-women1/400/500',
  },
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-women2/400/500',
  },
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-women3/400/500',
  },
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-women4/400/500',
  },
] as const

function ProductActions() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
      <button
        type="button"
        aria-label="Add to wishlist"
        className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand hover:text-white"
      >
        <Heart className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Compare"
        className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand hover:text-white"
      >
        <Layers className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Add to cart"
        className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand hover:text-white"
      >
        <ShoppingCart className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Quick view"
        className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand hover:text-white"
      >
        <Maximize2 className="h-4 w-4" />
      </button>
    </div>
  )
}

export function WomenProducts() {
  return (
    <section id="women" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink">New released Products for Women</h2>
          <p className="mt-3 text-mist">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <ProductActions />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-ink">{p.name}</h3>
                <p className="mt-1 text-lg font-bold text-ink">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
