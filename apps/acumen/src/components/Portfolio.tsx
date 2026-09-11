import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Graphics', 'UI/UX', 'Web Design', 'Coding', 'Developing'] as const

const items = [
  { id: 1, cat: 'Graphics', seed: 'acumen-port-1' },
  { id: 2, cat: 'UI/UX', seed: 'acumen-port-2' },
  { id: 3, cat: 'Web Design', seed: 'acumen-port-3' },
  { id: 4, cat: 'Coding', seed: 'acumen-port-4' },
  { id: 5, cat: 'Developing', seed: 'acumen-port-5' },
  { id: 6, cat: 'Graphics', seed: 'acumen-port-6' },
  { id: 7, cat: 'UI/UX', seed: 'acumen-port-7' },
  { id: 8, cat: 'Web Design', seed: 'acumen-port-8' },
  { id: 9, cat: 'Coding', seed: 'acumen-port-9' },
] as const

export function Portfolio() {
  const [filter, setFilter] = useState<string>('All')
  const filtered = filter === 'All' ? items : items.filter((i) => i.cat === filter)

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">Portfolio</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-brand to-brand-light" />
        </div>
        <div
          className="mt-8 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Portfolio filter"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                filter === cat
                  ? 'bg-gradient-to-r from-brand to-brand-light text-white'
                  : 'bg-gray-100 text-mist hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/300`}
                alt={`Portfolio item — ${item.cat}`}
                className="h-60 w-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
