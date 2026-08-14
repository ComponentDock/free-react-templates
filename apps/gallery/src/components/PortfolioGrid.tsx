import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { portfolioItems, type Filter, type PortfolioItem } from '../data'

interface PortfolioGridProps {
  activeFilter: Filter
}

function PortfolioItemCard({ item }: { item: PortfolioItem }) {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <a
      href="#portfolio"
      className="group relative mb-1 block break-inside-avoid overflow-hidden rounded-sm bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-gray-900"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      onFocus={() => setShowOverlay(true)}
      onBlur={() => setShowOverlay(false)}
    >
      <img src={item.src} alt={item.alt} className="w-full" loading="lazy" />
      <span
        className={cn(
          'absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/60 text-center text-white transition-opacity',
          showOverlay ? 'opacity-100' : 'opacity-0',
        )}
      >
        <span className="px-3 text-sm font-semibold">{item.title}</span>
        <span className="px-3 text-xs uppercase tracking-wider text-white/80">{item.category}</span>
      </span>
    </a>
  )
}

export function PortfolioGrid({ activeFilter }: PortfolioGridProps) {
  const items =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="mx-auto max-w-6xl px-4 pb-24 pt-4 sm:px-6"
    >
      <div className="columns-1 gap-1 sm:columns-2 lg:columns-3">
        {items.map((item) => (
          <PortfolioItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
