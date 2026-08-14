import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioFilter,
} from '../data'
import { SectionTitle } from './SectionTitle'

const categoryToFilter: Record<Exclude<PortfolioCategory, 'All'>, PortfolioFilter> = {
  Web: 'web',
  Design: 'design',
  Brand: 'brand',
}

/** Filterable portfolio grid (`#portfolio-section`): pill filter buttons
 *  (All / Web / Design / Brand) with the active one in brand blue, and a
 *  responsive photo grid with a hover overlay (isotope client-side filter
 *  recreated with React state). */
export function PortfolioSection() {
  const [active, setActive] = useState<PortfolioCategory>('All')

  const visible =
    active === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === categoryToFilter[active])

  return (
    <section id="portfolio-section" className="py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Portfolio</SectionTitle>
        <p className="mx-auto max-w-2xl text-center font-light text-gray-500">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        <div
          role="group"
          aria-label="Portfolio filters"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full px-5 py-2 text-sm transition-colors',
                active === category
                  ? 'bg-brand text-white'
                  : 'bg-black/5 text-chiptext hover:bg-brand hover:text-white',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item) => (
            <li key={item.label}>
              <figure className="group relative overflow-hidden rounded-lg">
                <img
                  src={item.photo}
                  alt={item.label}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
                  <button
                    type="button"
                    aria-label={`View ${item.label}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900"
                  >
                    <Search aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
