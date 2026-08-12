import { useState } from 'react'
import { Expand } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { galleryFilters, projects, type GalleryCategory } from '../data'

export function Gallery() {
  const [active, setActive] = useState<GalleryCategory | 'All Categories'>('All Categories')

  const visible =
    active === 'All Categories' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="bg-white py-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-[75px] max-w-[720px] text-center">
          <h2 className="font-display text-4xl font-bold text-ink-900">
            Our Recent Completed Projects
          </h2>
          <p className="mt-4 text-sm leading-6 text-ink-600">
            A selection of recent work across branding, creative, and digital design — each project
            crafted to move the business forward.
          </p>
        </div>

        <ul className="mb-14 flex flex-wrap items-center justify-center gap-2">
          {galleryFilters.map((filter) => (
            <li key={filter}>
              <button
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={cn(
                  'border-b-2 px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:text-brand-400',
                  active === filter ? 'border-brand-400 text-brand-400' : 'border-transparent',
                )}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article key={project.title} className="group relative overflow-hidden rounded-[5px]">
              <img
                src={project.image}
                alt={project.title}
                className="h-[320px] w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink-900">
                  <Expand className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-semibold text-white">{project.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
