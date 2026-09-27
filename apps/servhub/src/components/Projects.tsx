import { useState } from 'react'
import { Search } from 'lucide-react'

const categories = ['All', 'Web', 'Design', 'Brand'] as const
type Category = (typeof categories)[number]

interface Project {
  id: number
  category: Exclude<Category, 'All'>
  seed: string
}

const projects: Project[] = [
  { id: 1, category: 'Web', seed: 'servhub-proj-1' },
  { id: 2, category: 'Brand', seed: 'servhub-proj-2' },
  { id: 3, category: 'Web', seed: 'servhub-proj-3' },
  { id: 4, category: 'Web', seed: 'servhub-proj-4' },
  { id: 5, category: 'Web', seed: 'servhub-proj-5' },
  { id: 6, category: 'Brand', seed: 'servhub-proj-6' },
  { id: 7, category: 'Design', seed: 'servhub-proj-7' },
  { id: 8, category: 'Design', seed: 'servhub-proj-8' },
  { id: 9, category: 'Web', seed: 'servhub-proj-9' },
  { id: 10, category: 'Design', seed: 'servhub-proj-10' },
  { id: 11, category: 'Brand', seed: 'servhub-proj-11' },
]

export function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-black">Projects</h2>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded px-4 py-2 text-sm font-semibold transition ${
                active === cat
                  ? 'bg-lime-400 text-white'
                  : 'bg-white text-gray-600 hover:bg-lime-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {filtered.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={`Project ${project.id}`}
                className="aspect-[3/2] w-full object-cover transition group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/40">
                <Search
                  size={32}
                  className="text-white opacity-0 transition group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
