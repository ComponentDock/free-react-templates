import { useState } from 'react'

const products = [
  { name: 'Minimal', price: 29, seed: 'bespoke-prod-1' },
  { name: 'Collecta', price: 21, seed: 'bespoke-prod-2' },
  { name: 'Nine8', price: 38, seed: 'bespoke-prod-3' },
  { name: 'Hut', price: 49, seed: 'bespoke-prod-4' },
]

export function Collections() {
  const [offset, setOffset] = useState(0)

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(products.length - 1, o + 1))

  return (
    <section id="collections" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold text-black md:text-4xl">Collections</h2>
          <div className="flex items-center gap-3 text-sm">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous products"
              className="font-semibold text-gray-500 transition-colors hover:text-brand"
            >
              Prev
            </button>
            <span className="text-gray-300">/</span>
            <button
              type="button"
              onClick={next}
              aria-label="Next products"
              className="font-semibold text-gray-500 transition-colors hover:text-brand"
            >
              Next
            </button>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`transition-transform ${i >= offset ? 'opacity-100' : 'hidden md:block'}`}
            >
              <a href="#" className="block">
                <img
                  src={`https://picsum.photos/seed/${product.seed}/400/500`}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </a>
              <div className="mt-3 text-center md:text-left">
                <h3 className="text-lg font-bold text-black">{product.name}</h3>
                <strong className="text-brand">${product.price}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
