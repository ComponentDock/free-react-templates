import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const filters = ['All', 'Tattooing', 'Design', 'Removal'] as const

const portfolioItems = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/inkvibe-port1/400/400',
    category: 'Tattooing',
    title: 'Tribal Sleeve',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/inkvibe-port2/400/400',
    category: 'Design',
    title: 'Custom Rose',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/inkvibe-port3/400/400',
    category: 'Tattooing',
    title: 'Geometric Back',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/inkvibe-port4/400/400',
    category: 'Removal',
    title: 'Cover-Up Work',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/inkvibe-port5/400/400',
    category: 'Design',
    title: 'Watercolor Fox',
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/inkvibe-port6/400/400',
    category: 'Tattooing',
    title: 'Fine Line',
  },
  {
    id: 7,
    image: 'https://picsum.photos/seed/inkvibe-port7/400/400',
    category: 'Tattooing',
    title: 'Black & Grey',
  },
  {
    id: 8,
    image: 'https://picsum.photos/seed/inkvibe-port8/400/400',
    category: 'Design',
    title: 'Script Lettering',
  },
] as const

export function Portfolio() {
  const [active, setActive] = useState<string>('All')

  const filtered =
    active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="bg-obsidian py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white">Our Latest Work</h2>
          <p className="mt-4 text-gray-400">A showcase of our finest tattoo artistry</p>
        </div>

        {/* Filter menu */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                'rounded px-5 py-2 text-sm font-medium transition-colors',
                active === filter
                  ? 'bg-primary-400 text-void'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700',
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-void/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-semibold text-white">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
