import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const CATEGORIES = ['All', 'Popular', 'Latest', 'Following', 'Upcoming'] as const

type Category = (typeof CATEGORIES)[number]

interface PortfolioItem {
  id: number
  title: string
  category: Exclude<Category, 'All'>
  seed: string
}

const ITEMS: PortfolioItem[] = [
  { id: 1, title: 'Season Face', category: 'Latest', seed: 'kael-p1' },
  { id: 2, title: 'Urban Vibe', category: 'Popular', seed: 'kael-p2' },
  { id: 3, title: 'Digital Wave', category: 'Following', seed: 'kael-p3' },
  { id: 4, title: 'Night Glow', category: 'Upcoming', seed: 'kael-p4' },
  { id: 5, title: 'Coastal Line', category: 'Latest', seed: 'kael-p5' },
  { id: 6, title: 'Peak Focus', category: 'Popular', seed: 'kael-p6' },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? ITEMS : ITEMS.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            Quality Work
            <br />
            Recently Done Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium capitalize transition',
                active === cat
                  ? 'bg-gradient-to-r from-primary-500 to-accent-400 text-white'
                  : 'bg-gray-100 text-smoke hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400',
              )}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                width={600}
                height={400}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-500/80 opacity-0 transition duration-300 group-hover:opacity-100">
                <ExternalLink className="mb-3 h-8 w-8 text-white" />
                <h4 className="font-display text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm text-white/80">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
