import { useState } from 'react'

type Filter = 'all' | 'branding' | 'web' | 'marketing' | 'photography'

interface Project {
  id: number
  title: string
  category: Filter
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Stellar Branding',
    category: 'branding',
    image: 'https://picsum.photos/seed/pipekit-port1/400/300',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://picsum.photos/seed/pipekit-port2/400/300',
  },
  {
    id: 3,
    title: 'Social Campaign',
    category: 'marketing',
    image: 'https://picsum.photos/seed/pipekit-port3/400/300',
  },
  {
    id: 4,
    title: 'Product Photography',
    category: 'photography',
    image: 'https://picsum.photos/seed/pipekit-port4/400/300',
  },
  {
    id: 5,
    title: 'Corporate Identity',
    category: 'branding',
    image: 'https://picsum.photos/seed/pipekit-port5/400/300',
  },
  {
    id: 6,
    title: 'Web Application',
    category: 'web',
    image: 'https://picsum.photos/seed/pipekit-port6/400/300',
  },
  {
    id: 7,
    title: 'Email Marketing',
    category: 'marketing',
    image: 'https://picsum.photos/seed/pipekit-port7/400/300',
  },
  {
    id: 8,
    title: 'Lifestyle Shoot',
    category: 'photography',
    image: 'https://picsum.photos/seed/pipekit-port8/400/300',
  },
]

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Branding', value: 'branding' },
  { label: 'Web', value: 'web' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Photography', value: 'photography' },
]

export function Portfolio() {
  const [active, setActive] = useState<Filter>('all')

  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-500">
            Our Portfolio
          </p>
          <h2 className="text-3xl font-bold text-navy-600 sm:text-4xl">Featured Work</h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === f.value
                  ? 'bg-gold-400 text-navy-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-pressed={active === f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-800/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4">
                  <h4 className="text-sm font-bold text-white">{project.title}</h4>
                  <p className="text-xs capitalize text-white/70">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
