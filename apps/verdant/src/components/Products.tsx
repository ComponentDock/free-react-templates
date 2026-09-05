import { useState } from 'react'
import { Heart, ArrowLeftRight, ShoppingCart } from 'lucide-react'

const products = [
  { id: 1, name: 'Cactus Flower', price: '$10.99', tag: 'Hot', seed: 'verdant-pr1' },
  { id: 2, name: 'Cactus Flower', price: '$10.99', tag: null, seed: 'verdant-pr2' },
  { id: 3, name: 'Cactus Flower', price: '$10.99', tag: null, seed: 'verdant-pr3' },
  { id: 4, name: 'Cactus Flower', price: '$10.99', tag: 'Hot', seed: 'verdant-pr4' },
]

export function Products() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-ink">NEW ARRIVALS</h2>
          <p className="text-mist">We have the latest products, it must be exciting for you</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="group rounded-lg bg-white p-4 shadow-sm"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/400`}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                {p.tag && (
                  <span className="absolute left-2 top-2 rounded bg-brand px-2 py-1 text-xs font-semibold text-white">
                    {p.tag}
                  </span>
                )}
                {hoveredId === p.id && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                    <button
                      aria-label="Add to wishlist"
                      className="rounded bg-white p-2 shadow transition-colors hover:bg-brand hover:text-white"
                    >
                      <Heart size={16} />
                    </button>
                    <button
                      aria-label="Add to cart"
                      className="rounded bg-brand px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
                    >
                      <ShoppingCart size={14} className="mr-1 inline" />
                      Add to cart
                    </button>
                    <button
                      aria-label="Compare"
                      className="rounded bg-white p-2 shadow transition-colors hover:bg-brand hover:text-white"
                    >
                      <ArrowLeftRight size={16} />
                    </button>
                  </div>
                )}
              </div>
              <div className="text-center">
                <a href="#" className="text-sm font-medium text-ink hover:text-brand">
                  {p.name}
                </a>
                <h6 className="mt-1 text-brand">{p.price}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block rounded bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  )
}
