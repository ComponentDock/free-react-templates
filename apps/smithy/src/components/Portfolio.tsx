import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const filters = ['all', 'popular', 'latest', 'following', 'upcoming'] as const
type Filter = (typeof filters)[number]

const items = [
  { id: 1, title: 'Project Alpha', category: 'popular' as Filter, seed: 'smithy-p1' },
  { id: 2, title: 'Project Beta', category: 'latest' as Filter, seed: 'smithy-p2' },
  { id: 3, title: 'Project Gamma', category: 'following' as Filter, seed: 'smithy-p3' },
  { id: 4, title: 'Project Delta', category: 'popular' as Filter, seed: 'smithy-p4' },
  { id: 5, title: 'Project Epsilon', category: 'upcoming' as Filter, seed: 'smithy-p5' },
  { id: 6, title: 'Project Zeta', category: 'latest' as Filter, seed: 'smithy-p6' },
]

export function Portfolio() {
  const [active, setActive] = useState<Filter>('all')

  const filtered = active === 'all' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="bg-[var(--color-surface)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[var(--color-heading)]">
            quality work / Recently done project
          </h2>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'rounded px-4 py-2 text-sm font-medium capitalize transition-colors',
                active === f
                  ? 'bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-purple-deep)] text-white'
                  : 'bg-white text-[var(--color-body)] hover:text-[var(--color-purple)]',
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-1 text-lg font-semibold text-white">{item.title}</h3>
                <span className="text-sm capitalize text-white/80">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
