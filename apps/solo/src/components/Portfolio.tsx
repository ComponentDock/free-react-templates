import { useState } from 'react'
import { Eye } from 'lucide-react'
import { portfolioFilters, portfolioIntro, portfolioItems, type PortfolioFilter } from '../data'
import { cn } from '@free-react-templates/ui'

/** Portfolio grid with client-side category filters. Active filter uses the
 *  brand gradient; each item shows a gradient overlay with a preview icon on
 *  hover (lightbox is out of scope — the preview icon is decorative). */
export function Portfolio() {
  const [active, setActive] = useState<PortfolioFilter>('All')
  const visible =
    active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)

  return (
    <section id="portfolio" aria-label="Portfolio" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold uppercase text-ink lg:text-4xl">
            {portfolioIntro.heading}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted">
            {portfolioIntro.lead}
          </p>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-2">
          {portfolioFilters.map((filter) => (
            <li key={filter}>
              <button
                type="button"
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
                className={cn(
                  'px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors',
                  active === filter
                    ? 'bg-gradient-to-br from-primary to-accent text-white'
                    : 'bg-[#f9f9ff] text-ink hover:text-primary',
                )}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <figure key={item.title} className="group relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                width={600}
                height={480}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/90 to-accent/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Eye className="h-10 w-10 text-white" aria-hidden="true" />
                <span className="px-4 text-center text-sm font-medium uppercase tracking-wide text-white">
                  {item.title}
                </span>
                <span className="text-xs uppercase tracking-wider text-white/80">
                  {item.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="#portfolio"
            className="inline-block bg-gradient-to-br from-primary to-accent px-10 py-3 text-sm font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {portfolioIntro.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
