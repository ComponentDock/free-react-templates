import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { categoriesLabel, categoryCards, categoryPills, imgUrl } from '../data'

/* Filterable recipe grid (reference `div.categories-filter-section.spad`):
   four centered filter pills and five cards (20% width each on desktop).
   Filtering is client-side state — no mixitup dependency. */
export function CategoryFilter() {
  const [activeFilter, setActiveFilter] = useState('all')
  const visibleCards = categoryCards.filter(
    (card) => activeFilter === 'all' || card.tags.includes(activeFilter),
  )

  return (
    <section aria-label={categoriesLabel} className="bg-section py-[100px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <ul className="mb-[50px] flex flex-wrap items-center justify-center">
          {categoryPills.map((pill) => {
            const active = activeFilter === pill.filter
            return (
              <li key={pill.label}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(pill.filter)}
                  className={cn(
                    'inline-block px-[42px] py-[15px] text-[16px] font-bold transition-colors',
                    active ? 'text-brand' : 'text-ink hover:text-brand',
                  )}
                >
                  {pill.label}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-5">
          {visibleCards.map((card) => (
            <div key={card.title}>
              <img src={imgUrl(card.seed, 260, 260)} alt="" className="w-full object-cover" />
              <div className="px-[15px] pt-[18px] text-center">
                <h5 className="text-[16px] font-bold leading-[27px] text-ink">{card.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
