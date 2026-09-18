import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Web', 'Design', 'Brand'] as const
type Category = (typeof categories)[number]

const items: { id: number; category: Exclude<Category, 'All'>; seed: string }[] = [
  { id: 1, category: 'Web', seed: 'panorama-port1' },
  { id: 2, category: 'Web', seed: 'panorama-port2' },
  { id: 3, category: 'Brand', seed: 'panorama-port3' },
  { id: 4, category: 'Design', seed: 'panorama-port4' },
  { id: 5, category: 'Web', seed: 'panorama-port5' },
  { id: 6, category: 'Brand', seed: 'panorama-port6' },
  { id: 7, category: 'Web', seed: 'panorama-port7' },
  { id: 8, category: 'Design', seed: 'panorama-port8' },
  { id: 9, category: 'Web', seed: 'panorama-port9' },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ocean-400">
            Awesome Works
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Portfolio</h2>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded px-5 py-2 text-sm font-semibold transition-colors',
                active === cat
                  ? 'bg-ocean-400 text-white'
                  : 'bg-ocean-100 text-ocean-600 hover:bg-ocean-200',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {filtered.map((item) => (
            <a key={item.id} href="#" className="group relative block overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={`Portfolio item ${item.id}`}
                className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ocean-700/0 opacity-0 transition-all duration-300 group-hover:bg-ocean-700/60 group-hover:opacity-100">
                <Plus className="h-10 w-10 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
