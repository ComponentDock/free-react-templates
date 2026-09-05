import { useState } from 'react'

const categories = ['All', 'Coffee Design', 'Garden', 'Home Design', 'Office Design'] as const

const portfolioItems = [
  {
    id: 1,
    title: 'Minimal Flower Store',
    subtitle: 'Office Plants',
    category: 'Coffee Design',
    seed: 'verdant-p1',
  },
  {
    id: 2,
    title: 'Minimal Flower Store',
    subtitle: 'Office Plants',
    category: 'Garden',
    seed: 'verdant-p2',
  },
  {
    id: 3,
    title: 'Minimal Flower Store',
    subtitle: 'Office Plants',
    category: 'Garden',
    seed: 'verdant-p3',
  },
  {
    id: 4,
    title: 'Minimal Flower Store',
    subtitle: 'Office Plants',
    category: 'Garden',
    seed: 'verdant-p4',
  },
  {
    id: 5,
    title: 'Minimal Flower Store',
    subtitle: 'Office Plants',
    category: 'Office Design',
    seed: 'verdant-p5',
  },
  {
    id: 6,
    title: 'Minimal Flower Store',
    subtitle: 'Office Plants',
    category: 'Coffee Design',
    seed: 'verdant-p6',
  },
  {
    id: 7,
    title: 'Minimal Flower Store',
    subtitle: 'Office Plants',
    category: 'Home Design',
    seed: 'verdant-p7',
  },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-ink">OUR PORTFOLIO</h2>
          <p className="text-mist">We devote all of our experience and efforts for creation</p>
        </div>
        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-brand text-white'
                  : 'bg-white text-ink hover:bg-brand hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/400/400`}
                alt={item.title}
                className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/80 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center text-white">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
