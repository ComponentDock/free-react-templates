import { useState } from 'react'

const categories = ['All', 'Branding', 'Web Design', 'Creative Work', 'Image Manipulation'] as const
type Category = (typeof categories)[number]

const items = [
  { id: 1, category: 'Branding' as Category, seed: 'bytecraft-port-1' },
  { id: 2, category: 'Web Design' as Category, seed: 'bytecraft-port-2' },
  { id: 3, category: 'Creative Work' as Category, seed: 'bytecraft-port-3' },
  { id: 4, category: 'Image Manipulation' as Category, seed: 'bytecraft-port-4' },
  { id: 5, category: 'Branding' as Category, seed: 'bytecraft-port-5' },
  { id: 6, category: 'Web Design' as Category, seed: 'bytecraft-port-6' },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-dark">Remarkable Works</h2>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                active === cat
                  ? 'bg-brand text-dark'
                  : 'bg-gray-100 text-text-muted hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={`Portfolio item ${item.id}`}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105 md:h-64"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-dark/70 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium text-brand">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
