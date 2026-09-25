import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Packaging', 'Mockup', 'Typography', 'Photography'] as const
type Category = (typeof categories)[number]

const items = [
  { title: 'Square Box Mockup', category: 'Mockup' as const, seed: 'curriculo-p1' },
  { title: 'Product Box Package', category: 'Mockup' as const, seed: 'curriculo-p2' },
  { title: 'Creative Package Design', category: 'Packaging' as const, seed: 'curriculo-p3' },
  { title: 'Packaging Brand', category: 'Packaging' as const, seed: 'curriculo-p4' },
  { title: 'Isometric 3D Extrusion', category: 'Typography' as const, seed: 'curriculo-p5' },
  { title: 'White Space Photography', category: 'Photography' as const, seed: 'curriculo-p6' },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-extralight text-gray-800">
          Featured <strong className="font-bold">Portfolio</strong>
        </h2>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full px-4 py-1 text-sm font-semibold transition-colors',
                active === cat
                  ? 'bg-brand-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              )}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-brand-start/80 to-brand-end/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-lg font-bold text-white">{item.title}</span>
              </div>
              <div className="bg-gray-50 px-4 py-3">
                <h3 className="text-sm font-bold text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
