import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { TREND_PRODUCTS, TREND_TABS, type TrendTab } from '../data'
import { ProductCard } from './ProductCard'

/* trend — HOT TREND / BEST SELLER / FEATURE tabs switching a 3-card product
   grid, mirroring the original's tabbed trend section. */
export function Trend() {
  const [activeTab, setActiveTab] = useState<TrendTab>(TREND_TABS[0]!)

  return (
    <section id="trend" className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold tracking-wide text-ink uppercase dark:text-white">
          Trending Now
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TREND_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-pressed={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'cursor-pointer rounded-full px-6 py-2 text-sm font-semibold uppercase transition-colors',
                activeTab === tab
                  ? 'bg-brand text-white'
                  : 'bg-tint text-ink hover:bg-brand/10 dark:text-white',
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TREND_PRODUCTS[activeTab].map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
