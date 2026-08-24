import { useState } from 'react'
import { ExternalLink, ZoomIn } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['All', 'Web Design', 'Web Development', 'Branding', 'Marketing', 'UI/UX Design']

const projects = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Branding',
    image: 'https://picsum.photos/seed/pulse-proj1/600/400',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/pulse-proj2/600/400',
  },
  {
    id: 3,
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/pulse-proj3/600/400',
  },
  {
    id: 4,
    title: 'Marketing Campaign',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/pulse-proj4/600/400',
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Web Design',
    image: 'https://picsum.photos/seed/pulse-proj5/600/400',
  },
  {
    id: 6,
    title: 'Startup Branding',
    category: 'Branding',
    image: 'https://picsum.photos/seed/pulse-proj6/600/400',
  },
  {
    id: 7,
    title: 'Social Media Strategy',
    category: 'Marketing',
    image: 'https://picsum.photos/seed/pulse-proj7/600/400',
  },
  {
    id: 8,
    title: 'Dashboard Design',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/pulse-proj8/600/400',
  },
]

export function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="work" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-700 sm:text-4xl">
          Featured Projects
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                active === cat
                  ? 'bg-pulse-400 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={p.image}
                alt={p.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-navy-700/0 opacity-0 transition-all duration-300 group-hover:bg-navy-700/70 group-hover:opacity-100">
                <button
                  type="button"
                  aria-label={`Zoom ${p.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-700 transition-colors hover:bg-pulse-400 hover:text-white"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label={`Link ${p.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-700 transition-colors hover:bg-pulse-400 hover:text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-3">
                <h3 className="text-sm font-semibold text-navy-700">{p.title}</h3>
                <span className="text-xs text-gray-400">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
