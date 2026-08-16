import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { products, productTabs } from '../data'
import { ProductCard } from './ProductCard'

const PER_PAGE = 4

/* Reference: section.latest-items #1 — "Trending This Week" heading, Bootstrap
   nav-tabs (Men active / Women / Baby / Fashion) and a products carousel of
   twelve cards per pane (photo + hover cart/heart/zoom icons + name + red
   sale price + strikethrough original). */
export function TrendingProducts() {
  const [tab, setTab] = useState(productTabs[0]!)
  const [index, setIndex] = useState(0)
  const pages = Math.ceil(products.length / PER_PAGE)
  const visible = products.slice(index * PER_PAGE, index * PER_PAGE + PER_PAGE)

  const goTo = (next: number) => setIndex(((next % pages) + pages) % pages)

  return (
    <section
      id="trending"
      aria-label="Trending products"
      className="bg-white pb-[100px] pt-[95px] text-center"
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <h2 className="text-[34px]">Trending This Week</h2>
        <div
          role="tablist"
          aria-label="Product categories"
          className="mt-4 flex justify-center gap-8"
        >
          {productTabs.map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={tab === label}
              aria-controls="trending-panel"
              onClick={() => {
                setTab(label)
                setIndex(0)
              }}
              className={cn(
                'border-b-2 pb-1 font-heading text-base font-medium transition-colors',
                tab === label
                  ? 'border-brand text-brand'
                  : 'border-transparent text-charcoal hover:text-brand',
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div id="trending-panel" role="tabpanel" aria-label={`${tab} products`} className="mt-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {visible.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous products"
              onClick={() => goTo(index - 1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line-soft text-charcoal transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            {Array.from({ length: pages }, (_, pageIndex) => (
              <button
                key={pageIndex}
                type="button"
                aria-label={`Go to page ${pageIndex + 1}`}
                aria-current={pageIndex === index ? 'true' : undefined}
                onClick={() => goTo(pageIndex)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full border border-charcoal/40 transition-colors',
                  pageIndex === index ? 'border-brand bg-brand' : 'bg-transparent',
                )}
              />
            ))}
            <button
              type="button"
              aria-label="Next products"
              onClick={() => goTo(index + 1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line-soft text-charcoal transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
