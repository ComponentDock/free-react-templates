import { useState } from 'react'

const categories = ['All', 'Buildings', 'Rebuild', 'Architecture'] as const
type Category = (typeof categories)[number]

interface Project {
  title: string
  category: Exclude<Category, 'All'>
  image: string
}

const projects: Project[] = [
  {
    title: 'Skyline Tower',
    category: 'Buildings',
    image: 'https://picsum.photos/seed/pexflow-p1/400/300',
  },
  {
    title: 'Harbor Renovation',
    category: 'Rebuild',
    image: 'https://picsum.photos/seed/pexflow-p2/400/300',
  },
  {
    title: 'Urban Blueprint',
    category: 'Architecture',
    image: 'https://picsum.photos/seed/pexflow-p3/400/300',
  },
]

export function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-alt-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">Our Projects</p>
          <h2 className="text-3xl font-bold text-heading">Featured Work</h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded px-5 py-2 text-sm font-medium transition-colors ${
                active === cat ? 'bg-brand text-white' : 'bg-white text-body hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-heading/0 opacity-0 transition-all duration-300 group-hover:bg-heading/60 group-hover:opacity-100">
                <span className="text-lg font-bold text-white">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
