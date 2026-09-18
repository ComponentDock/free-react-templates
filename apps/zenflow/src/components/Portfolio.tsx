import { useState } from 'react'

const categories = [
  'All',
  'Web Design',
  'Photography',
  'Web Development',
  'Online Marketing',
  'Digital Media',
] as const

const projects = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/zenflow-port1/600/400',
    category: 'Web Design',
    title: 'Project One',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/zenflow-port2/600/400',
    category: 'Photography',
    title: 'Project Two',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/zenflow-port3/600/400',
    category: 'Web Development',
    title: 'Project Three',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/zenflow-port4/600/400',
    category: 'Online Marketing',
    title: 'Project Four',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/zenflow-port5/600/400',
    category: 'Digital Media',
    title: 'Project Five',
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/zenflow-port6/600/400',
    category: 'Web Design',
    title: 'Project Six',
  },
] as const

export function Portfolio() {
  const [filter, setFilter] = useState<string>('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="bg-section-gray py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                filter === cat
                  ? 'bg-primary-400 text-white'
                  : 'bg-white text-body hover:bg-primary-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article key={project.id} className="group overflow-hidden bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary-400/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a href="#" className="text-sm font-bold uppercase text-white">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
                  {project.title}
                </h3>
                <p className="text-sm text-muted">{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
