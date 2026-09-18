import { useState } from 'react'

const FILTERS = ['All Fields', 'Branding', 'Editorial Design', 'Graphic Design'] as const
type Filter = (typeof FILTERS)[number]

const PROJECTS = [
  { id: 1, category: 'Branding' as Filter, title: 'Brand Identity One', seed: 'foliox-proj-1' },
  { id: 2, category: 'Branding' as Filter, title: 'Brand Strategy Two', seed: 'foliox-proj-2' },
  {
    id: 3,
    category: 'Editorial Design' as Filter,
    title: 'Magazine Layout',
    seed: 'foliox-proj-3',
  },
  {
    id: 4,
    category: 'Graphic Design' as Filter,
    title: 'Poster Collection',
    seed: 'foliox-proj-4',
  },
  {
    id: 5,
    category: 'Editorial Design' as Filter,
    title: 'Book Cover Series',
    seed: 'foliox-proj-5',
  },
  {
    id: 6,
    category: 'Graphic Design' as Filter,
    title: 'Visual Identity Pack',
    seed: 'foliox-proj-6',
  },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All Fields')

  const filtered =
    activeFilter === 'All Fields' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="bg-surface pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-heading">Projects</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === f
                  ? 'bg-heading text-white'
                  : 'bg-white text-muted hover:text-heading'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-sm">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <span className="text-xs font-medium text-primary">{project.category}</span>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
