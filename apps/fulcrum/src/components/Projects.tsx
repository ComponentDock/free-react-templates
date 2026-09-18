import { useState } from 'react'

const categories = ['All', 'Web', 'Design', 'Brand'] as const
type Category = (typeof categories)[number]

const projects = [
  { id: 1, category: 'Web' as Category, seed: 'fulcrum-proj1' },
  { id: 2, category: 'Brand' as Category, seed: 'fulcrum-proj2' },
  { id: 3, category: 'Web' as Category, seed: 'fulcrum-proj3' },
  { id: 4, category: 'Web' as Category, seed: 'fulcrum-proj4' },
  { id: 5, category: 'Web' as Category, seed: 'fulcrum-proj5' },
  { id: 6, category: 'Brand' as Category, seed: 'fulcrum-proj6' },
  { id: 7, category: 'Design' as Category, seed: 'fulcrum-proj7' },
  { id: 8, category: 'Design' as Category, seed: 'fulcrum-proj8' },
  { id: 9, category: 'Web' as Category, seed: 'fulcrum-proj9' },
  { id: 10, category: 'Design' as Category, seed: 'fulcrum-proj10' },
  { id: 11, category: 'Brand' as Category, seed: 'fulcrum-proj11' },
  { id: 12, category: 'Design' as Category, seed: 'fulcrum-proj12' },
] as const

export function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Projects</h2>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                active === cat ? 'bg-primary text-white' : 'bg-gray-200 text-ink hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={`https://picsum.photos/seed/${project.seed}/600/400`}
              className="group relative block overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={`Project ${project.id}`}
                className="aspect-[3/2] w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                <span className="text-lg font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  View Project
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
