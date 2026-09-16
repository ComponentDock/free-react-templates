import { useState } from 'react'
import { Plus } from 'lucide-react'

const categories = ['Show all', 'Interior', 'Recent', 'Big building', 'Park'] as const

type Category = (typeof categories)[number]

interface Project {
  title: string
  category: string
  filterCategory: Category
  image: string
}

const projects: Project[] = [
  {
    title: 'Floride Chemicals',
    category: 'Factory',
    filterCategory: 'Show all',
    image: 'https://picsum.photos/seed/hardhat-proj1/600/400',
  },
  {
    title: 'Blue Office Tower',
    category: 'Office',
    filterCategory: 'Interior',
    image: 'https://picsum.photos/seed/hardhat-proj2/600/400',
  },
  {
    title: 'Riverside Complex',
    category: 'Residential',
    filterCategory: 'Recent',
    image: 'https://picsum.photos/seed/hardhat-proj3/600/400',
  },
  {
    title: 'Metro Station',
    category: 'Public',
    filterCategory: 'Big building',
    image: 'https://picsum.photos/seed/hardhat-proj4/600/400',
  },
  {
    title: 'Green Valley Park',
    category: 'Park',
    filterCategory: 'Park',
    image: 'https://picsum.photos/seed/hardhat-proj5/600/400',
  },
  {
    title: 'Harbor View Mall',
    category: 'Commercial',
    filterCategory: 'Show all',
    image: 'https://picsum.photos/seed/hardhat-proj6/600/400',
  },
] as const

export function Projects() {
  const [active, setActive] = useState<Category>('Show all')

  const filtered =
    active === 'Show all' ? projects : projects.filter((p) => p.filterCategory === active)

  return (
    <section id="projects" aria-label="Projects" className="bg-ice py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mb-8 text-center">
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-bold uppercase tracking-wide text-gray-200 sm:text-8xl select-none">
            Gallery
          </span>
          <h2 className="relative font-display text-3xl font-bold uppercase tracking-wide text-navy sm:text-4xl">
            Our Projects
          </h2>
        </div>

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                active === cat ? 'bg-brand text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/60 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <Plus className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                <p className="text-xs text-white/70">{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
