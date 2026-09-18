import { useState } from 'react'

const filters = ['All', 'Web', 'Design', 'Brand'] as const
type Filter = (typeof filters)[number]

const portfolioItems = [
  {
    id: 1,
    category: 'Web' as Filter,
    image: 'https://picsum.photos/seed/turbo-port1/600/400',
    title: 'Website Redesign',
  },
  {
    id: 2,
    category: 'Design' as Filter,
    image: 'https://picsum.photos/seed/turbo-port2/600/400',
    title: 'Brand Identity',
  },
  {
    id: 3,
    category: 'Brand' as Filter,
    image: 'https://picsum.photos/seed/turbo-port3/600/400',
    title: 'Logo Design',
  },
  {
    id: 4,
    category: 'Web' as Filter,
    image: 'https://picsum.photos/seed/turbo-port4/600/400',
    title: 'E-commerce Platform',
  },
  {
    id: 5,
    category: 'Design' as Filter,
    image: 'https://picsum.photos/seed/turbo-port5/600/400',
    title: 'UI/UX Design',
  },
  {
    id: 6,
    category: 'Brand' as Filter,
    image: 'https://picsum.photos/seed/turbo-port6/600/400',
    title: 'Marketing Campaign',
  },
] as const

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const filtered =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Portfolio</h2>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded px-4 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? 'bg-primary-500 text-white'
                  : 'bg-mist text-smoke hover:bg-primary-500 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary-500/0 transition-colors duration-300 group-hover:bg-primary-500/80">
                <span className="text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
