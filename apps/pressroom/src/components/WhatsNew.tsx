import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { WHATS_NEW_TABS, type NewsCard } from '../data'

function NewsGridCard({ card }: { card: NewsCard }) {
  return (
    <article className="group">
      <div className="mb-3 overflow-hidden rounded-md">
        <img
          src={card.image}
          alt=""
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <h4 className="font-heading text-lg font-bold leading-snug text-navy transition-colors group-hover:text-brand">
        {card.title}
      </h4>
      <p className="mt-1.5 text-sm text-meta">{card.byline}</p>
    </article>
  )
}

export function WhatsNew() {
  const [active, setActive] = useState(0)
  const category = WHATS_NEW_TABS[active]

  return (
    <section id="category" aria-label="What's New" className="bg-surface pb-5 pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold text-navy">Whats New</h2>
          <div role="tablist" aria-label="News categories" className="flex flex-wrap gap-1">
            {WHATS_NEW_TABS.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  'px-3 py-1.5 text-sm font-medium uppercase tracking-wide transition-colors',
                  i === active
                    ? 'bg-brand text-white'
                    : 'text-meta hover:bg-white hover:text-brand',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          aria-label={category?.label}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {category?.cards.map((card) => (
            <NewsGridCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
