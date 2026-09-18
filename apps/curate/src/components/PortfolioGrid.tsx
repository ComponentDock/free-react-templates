import { useState } from 'react'

const categories = ['All', 'Vector', 'Raster', 'UI/UX', 'Printing'] as const
type Category = (typeof categories)[number]

interface PortfolioItem {
  id: number
  title: string
  category: Exclude<Category, 'All'>
  seed: string
}

const items: PortfolioItem[] = [
  { id: 1, title: '3D Helmet Design', category: 'Vector', seed: 'curate-1' },
  { id: 2, title: '2D Vinyl Design', category: 'Raster', seed: 'curate-2' },
  { id: 3, title: 'Creative Poster Design', category: 'UI/UX', seed: 'curate-3' },
  { id: 4, title: 'Embossed Logo Design', category: 'Printing', seed: 'curate-4' },
  { id: 5, title: '3D Helmet Design', category: 'Vector', seed: 'curate-5' },
  { id: 6, title: '2D Vinyl Design', category: 'Raster', seed: 'curate-6' },
  { id: 7, title: 'Creative Poster Design', category: 'UI/UX', seed: 'curate-7' },
  { id: 8, title: 'Embossed Logo Design', category: 'Printing', seed: 'curate-8' },
  { id: 9, title: '3D Helmet Design', category: 'Vector', seed: 'curate-9' },
  { id: 10, title: '2D Vinyl Design', category: 'Raster', seed: 'curate-10' },
  { id: 11, title: 'Creative Poster Design', category: 'UI/UX', seed: 'curate-11' },
  { id: 12, title: 'Embossed Logo Design', category: 'Printing', seed: 'curate-12' },
]

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')

  const filtered =
    activeFilter === 'All' ? items : items.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">This is what we can do for you</h2>
          <p className="text-mist">Who are in extremely love with eco friendly system..</p>
        </div>

        {/* Filter bar */}
        <ul className="mb-10 flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveFilter(cat)}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'border-brand text-brand'
                    : 'border-transparent text-mist hover:text-ink'
                }`}
                aria-pressed={activeFilter === cat}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.seed}/600/400`}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-1 text-lg font-semibold text-white">{item.title}</h3>
                <span className="text-sm text-white/70">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
