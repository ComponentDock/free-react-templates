import { useState } from 'react'
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react'
import { products } from '../data'

/**
 * Latest Cakes: a state-driven carousel of four product cards, each with a
 * photo, a hover "Add to cart" gold bar, a cake name and a gold price.
 * Side arrows move the visible window (one card per step, wrapping).
 */
export function LatestCakes() {
  const [start, setStart] = useState(0)
  const visible = Math.min(3, products.length)
  const maxStart = products.length - visible

  const prev = () => setStart((s) => (s <= 0 ? maxStart : s - 1))
  const next = () => setStart((s) => (s >= maxStart ? 0 : s + 1))

  const shown = products.slice(start, start + visible)

  return (
    <section id="cakes" className="bg-ink pb-[120px]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="relative">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((product) => (
              <li key={product.name} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="aspect-[6/5] w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-brand py-[14px] text-center transition-transform duration-300 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 text-[16px] text-ink uppercase">
                      <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                      Add to cart
                    </span>
                  </div>
                </div>
                <h3 className="mt-[24px] text-center text-[20px] text-heading">{product.name}</h3>
                <div className="mt-[12px] text-center">
                  <span className="text-[20px] font-light text-brand">{product.price}</span>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Previous cakes"
            onClick={prev}
            className="absolute top-1/2 -left-6 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-brand hover:text-brand lg:flex"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next cakes"
            onClick={next}
            className="absolute top-1/2 -right-6 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-brand hover:text-brand lg:flex"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
