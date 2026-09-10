import { useState } from 'react'

interface PortfolioItem {
  title: string
  category: string
  image: string
}

const categories = ['All', 'Popular', 'Latest', 'Following', 'Upcoming']

const items: PortfolioItem[] = [
  {
    title: 'Brand Identity',
    category: 'Popular',
    image: 'https://picsum.photos/seed/brushmark-port1/600/400',
  },
  {
    title: 'Web Redesign',
    category: 'Latest',
    image: 'https://picsum.photos/seed/brushmark-port2/600/400',
  },
  {
    title: 'App UI Kit',
    category: 'Popular',
    image: 'https://picsum.photos/seed/brushmark-port3/600/400',
  },
  {
    title: 'Motion Graphics',
    category: 'Following',
    image: 'https://picsum.photos/seed/brushmark-port4/600/400',
  },
  {
    title: 'Package Design',
    category: 'Latest',
    image: 'https://picsum.photos/seed/brushmark-port5/600/400',
  },
  {
    title: 'Social Campaign',
    category: 'Upcoming',
    image: 'https://picsum.photos/seed/brushmark-port6/600/400',
  },
]

export function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-pink">
            Our Portfolio
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Check Our Recent Client Work</h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-[5px] px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-gradient-to-r from-brand-blue to-brand-pink text-white'
                  : 'bg-white text-mist hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-blue/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
