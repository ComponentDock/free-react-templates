import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface Project {
  title: string
  category: string[]
  image: string
}

const projects: Project[] = [
  {
    title: '3D Helmet Design',
    category: ['vector', 'printing'],
    image: 'https://picsum.photos/seed/eminence-proj1/600/400',
  },
  {
    title: '2D Vinyl Design',
    category: ['vector', 'uiux'],
    image: 'https://picsum.photos/seed/eminence-proj2/600/400',
  },
  {
    title: 'Creative Poster Design',
    category: ['raster', 'uiux'],
    image: 'https://picsum.photos/seed/eminence-proj3/600/400',
  },
  {
    title: 'Embossed Logo Design',
    category: ['vector', 'printing'],
    image: 'https://picsum.photos/seed/eminence-proj4/600/400',
  },
  {
    title: '3D Disposable Bottle',
    category: ['vector', 'raster'],
    image: 'https://picsum.photos/seed/eminence-proj5/600/400',
  },
  {
    title: '3D Logo Design',
    category: ['vector', 'uiux'],
    image: 'https://picsum.photos/seed/eminence-proj6/600/400',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Vector', value: 'vector' },
  { label: 'Raster', value: 'raster' },
  { label: 'UI/UX', value: 'uiux' },
  { label: 'Printing', value: 'printing' },
]

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <section id="gallery" className="py-20 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-[var(--font-heebo)]">
            Our Latest Featured Projects
          </h2>
          <p className="text-text-secondary">Creative works across design disciplines.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-full transition-colors',
                activeFilter === value
                  ? 'bg-brand text-white'
                  : 'bg-white text-text-secondary hover:text-brand border border-line',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-lg font-bold mb-1 font-[var(--font-heebo)]">{project.title}</h3>
                <p className="text-sm text-white/70">Client Project</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-brand text-white font-medium rounded-full hover:bg-brand-dark transition-colors">
            Load More Items
          </button>
        </div>
      </div>
    </section>
  )
}
