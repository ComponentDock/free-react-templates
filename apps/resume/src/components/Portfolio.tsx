import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { portfolio } from '../data'

/** Portfolio mosaic with client-side filter tabs (All / Branding / Logo /
 *  UI/UX / Web Design); each pane shows its own six-image mosaic (one large
 *  tile + a stacked pair) with a hover zoom/overlay. */
export function Portfolio() {
  const [active, setActive] = useState<(typeof portfolio.tabs)[number]>('All')
  const images = portfolio.panes[active]

  return (
    <section id="portfolio" aria-label="Portfolio" className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-serif text-4xl font-semibold text-ink lg:text-[48px] lg:leading-tight">
          {portfolio.heading}
        </h2>

        <ul
          role="tablist"
          aria-label="Portfolio filters"
          className="mt-12 flex flex-wrap justify-center gap-2 border-b-2 border-[#e7ebf2]"
        >
          {portfolio.tabs.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                role="tab"
                aria-selected={tab === active}
                onClick={() => setActive(tab)}
                className={cn(
                  'border-b-2 px-5 py-3 text-sm font-medium uppercase tracking-wide transition-colors',
                  tab === active
                    ? 'border-brand text-brand'
                    : 'border-transparent text-muted hover:text-ink',
                )}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <div
          role="tabpanel"
          aria-label={`${active} portfolio items`}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image, i) => (
            <a
              key={image.src}
              href="#portfolio"
              onClick={(event) => event.preventDefault()}
              className={cn(
                'group relative block overflow-hidden',
                (i === 0 || i === 3) && 'lg:row-span-2',
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={cn(
                  'w-full object-cover transition-transform duration-500 group-hover:scale-110',
                  i === 0 || i === 3 ? 'h-full min-h-[320px]' : 'h-64',
                )}
              />
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
