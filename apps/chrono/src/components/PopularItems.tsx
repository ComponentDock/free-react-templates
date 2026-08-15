import { useState } from 'react'
import { Heart } from 'lucide-react'
import {
  addToCartLabel,
  favoriteLabel,
  popularIntro,
  popularProducts,
  popularTitle,
  sortLabel,
  sortOptions,
  viewMoreLabel,
} from '../data'

export function PopularItems() {
  const [sort, setSort] = useState<string>(sortOptions[0])

  return (
    <section id="popular-section" className="bg-paper py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-sans text-5xl font-bold leading-none text-black">{popularTitle}</h2>
          <p className="mt-6 text-base leading-relaxed text-[#777]">{popularIntro}</p>
        </div>

        <div className="mb-10 flex justify-end">
          <label htmlFor="chrono-sort" className="sr-only">
            {sortLabel}
          </label>
          <select
            id="chrono-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-full border-0 bg-[#f2f2f2] px-6 py-3 font-sans text-sm font-semibold text-ink outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product) => (
            <article key={product.name} className="group">
              <div className="relative overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[7/8] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-addbar py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                  <a
                    href="#cart-section"
                    className="font-sans text-base font-semibold uppercase tracking-wide text-white"
                  >
                    {addToCartLabel}
                  </a>
                </div>
                <button
                  type="button"
                  aria-label={`${favoriteLabel}: ${product.name}`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-white text-[#333333] transition-colors hover:text-brand"
                >
                  <Heart className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="pt-6 text-center">
                <h3 className="font-sans text-2xl font-bold text-[#444444]">{product.name}</h3>
                <span className="mt-1 block font-sans text-lg font-medium text-[#444444]">
                  {product.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#arrivals-section"
            className="group relative inline-block overflow-hidden bg-brand px-7 py-[30px] font-sans text-base font-semibold uppercase tracking-[0.03em] text-white"
          >
            <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-herobtn transition-transform duration-500 ease-[cubic-bezier(0.5,1.6,0.4,0.7)] group-hover:scale-x-100" />
            <span className="relative">{viewMoreLabel}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
