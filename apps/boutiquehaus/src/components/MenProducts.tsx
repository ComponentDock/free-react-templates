import { Heart, Layers, ShoppingCart, Maximize2 } from 'lucide-react'

const products = [
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-men1/400/500',
  },
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-men2/400/500',
  },
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-men3/400/500',
  },
  {
    name: 'Long Sleeve Shirt',
    price: '$150.00',
    image: 'https://picsum.photos/seed/bh-men4/400/500',
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

export function MenProducts() {
  return (
    <section id="men" className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/boutiquehaus-men-bg/1600/800"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white">New released Products for Men</h2>
          <p className="mt-3 text-white/70">Who are in extremely love with eco friendly system.</p>
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
              <div className="mt-4 text-white">
                <h3 className="text-sm font-medium">{p.name}</h3>
                <p className="mt-1 text-lg font-bold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
