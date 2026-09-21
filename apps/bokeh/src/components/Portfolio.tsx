import { useState } from 'react'

export interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  span?: 'wide'
}

const DEFAULT_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: 'Fashion Photography',
    category: 'fashion',
    image: 'https://picsum.photos/seed/bokeh-1/600/400',
  },
  {
    id: 2,
    title: 'Desert Work',
    category: 'wedding motion portrait',
    image: 'https://picsum.photos/seed/bokeh-2/800/400',
    span: 'wide',
  },
  {
    id: 3,
    title: 'Wedding Moments',
    category: 'wedding motion',
    image: 'https://picsum.photos/seed/bokeh-3/600/400',
  },
  {
    id: 4,
    title: 'Motion Study',
    category: 'motion portrait',
    image: 'https://picsum.photos/seed/bokeh-4/600/400',
  },
  {
    id: 5,
    title: 'Portrait Session',
    category: 'portrait fashion',
    image: 'https://picsum.photos/seed/bokeh-5/600/400',
  },
  {
    id: 6,
    title: 'Urban Wedding',
    category: 'wedding fashion',
    image: 'https://picsum.photos/seed/bokeh-6/800/400',
    span: 'wide',
  },
]

const FILTERS = ['all', 'wedding', 'motion', 'portrait', 'fashion']

export interface PortfolioProps {
  items?: PortfolioItem[]
}

export function Portfolio({ items = DEFAULT_ITEMS }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all' ? items : items.filter((item) => item.category.includes(activeFilter))

  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-heading text-3xl font-bold text-heading">
            Check <span className="text-brand">Recent</span> Work
          </h3>
          <p className="mt-2 font-body text-body-text">
            A showcase of our finest photography projects.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-brand text-white'
                  : 'bg-muted text-body-text hover:bg-brand hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`group relative cursor-pointer overflow-hidden rounded ${
                item.span === 'wide' ? 'sm:col-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand">Photography</p>
                  <h4 className="font-heading text-lg font-bold text-white">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
