import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ratedProducts } from '../data'
import { ProductCard } from './ProductCard'
import { SectionTitle } from './SectionTitle'

const WINDOW = 3

/** Centered "Most Rated" band. The carousel shows a three-card window that
 *  advances one card at a time and wraps around the five rated products. */
export function MostRated() {
  const [start, setStart] = useState(0)

  const visible = [0, 1, 2].map(
    (offset) => ratedProducts[(start + offset) % ratedProducts.length]!,
  )

  return (
    <section id="most-rated" aria-label="Most Rated" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <SectionTitle centered>Most Rated</SectionTitle>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.slice(0, WINDOW).map((product, offset) => (
            <ProductCard key={`${product.seed}-${offset}`} product={product} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous rated products"
            onClick={() => setStart((current) => (current - 1 + ratedProducts.length) % ratedProducts.length)}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:bg-black hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next rated products"
            onClick={() => setStart((current) => (current + 1) % ratedProducts.length)}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors hover:bg-black hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
