import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['View All', 'Residential', 'Corporate', 'Restaurant', 'Industrial'] as const

type Category = (typeof categories)[number]

const projects = [
  { id: 1, cats: ['Corporate', 'Restaurant'] as Category[] },
  { id: 2, cats: ['Restaurant', 'Industrial'] as Category[] },
  { id: 3, cats: ['Industrial', 'Corporate'] as Category[] },
  { id: 4, cats: ['Residential', 'Corporate'] as Category[] },
  { id: 5, cats: ['Restaurant', 'Residential'] as Category[] },
  { id: 6, cats: ['Corporate', 'Industrial'] as Category[] },
]

export function Projects() {
  const [active, setActive] = useState<Category>('View All')

  const filtered =
    active === 'View All' ? projects : projects.filter((p) => p.cats.includes(active))

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold text-charcoal">Latest Projects</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  'rounded px-4 py-2 text-sm font-medium transition-colors',
                  active === cat
                    ? 'bg-lime-accent text-charcoal'
                    : 'bg-surface text-gray-600 hover:bg-gray-200',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/structura-proj-${p.id}/600/400`}
                alt={`Architecture Building ${p.id}`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors group-hover:bg-charcoal/60">
                <Search className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-charcoal/80 p-4">
                <h3 className="font-semibold text-white">Architecture Building</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
