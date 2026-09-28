import { useState } from 'react'
import { Search } from 'lucide-react'

const FILTERS = [
  'All',
  'Digital Design',
  'Web Design',
  'Brand Identity',
  'Illustrations',
  'Motion Graphics',
]

const PORTFOLIO_ITEMS = [
  {
    title: 'Brand Identity - Company',
    category: 'Brand Identity',
    image: 'https://picsum.photos/seed/idcraft-p1/600/400',
    tags: ['Web Design', 'Brand Identity'],
  },
  {
    title: 'Device Mockup',
    category: 'Digital Design',
    image: 'https://picsum.photos/seed/idcraft-p2/600/400',
    tags: ['Brand Identity', 'Illustrations'],
  },
  {
    title: 'Brand Identity - Startup',
    category: 'Digital Design',
    image: 'https://picsum.photos/seed/idcraft-p3/600/400',
    tags: ['Web Design', 'Illustrations'],
  },
  {
    title: 'Device Mockup Pro',
    category: 'Digital Design',
    image: 'https://picsum.photos/seed/idcraft-p4/600/400',
    tags: ['Brand Identity', 'Motion Graphics'],
  },
  {
    title: 'Brand Identity - Agency',
    category: 'Digital Design',
    image: 'https://picsum.photos/seed/idcraft-p6/600/400',
    tags: ['Brand Identity', 'Motion Graphics'],
  },
  {
    title: 'Web Layout',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/idcraft-p8/600/400',
    tags: ['Web Design', 'Motion Graphics'],
  },
  {
    title: 'Logo Collection',
    category: 'Brand Identity',
    image: 'https://picsum.photos/seed/idcraft-p9/600/400',
    tags: ['Brand Identity'],
  },
  {
    title: 'Illustration Set',
    category: 'Illustrations',
    image: 'https://picsum.photos/seed/idcraft-p10/600/400',
    tags: ['Illustrations'],
  },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter(
          (item) => item.tags.some((t) => t === activeFilter) || item.category === activeFilter,
        )

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-1.5 h-8 bg-amber-brand mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-heading">
            My Portfolio Showcase
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold transition-colors ${
                activeFilter === filter
                  ? 'bg-dark-heading text-white'
                  : 'bg-light-bg text-dark-heading hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {filtered.map((item) => (
          <div key={item.title + item.image} className="group relative overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-dark-heading/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
              <h5 className="text-sm font-semibold mb-1">{item.title}</h5>
              <span className="text-xs text-white/70 mb-3">{item.category}</span>
              <Search size={20} className="text-amber-brand" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
