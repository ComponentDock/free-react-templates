import { useState } from 'react'

const categories = ['All', 'Graphics', 'UI/UX', 'Web Design', 'Coding'] as const

const projects = [
  { title: 'Print Template', category: 'Graphics', seed: 'linnet-p1' },
  { title: 'Graphics Template', category: 'UI/UX', seed: 'linnet-p2' },
  { title: 'Web Template', category: 'Web Design', seed: 'linnet-p3' },
  { title: 'Developing Project', category: 'Coding', seed: 'linnet-p4' },
  { title: 'Photography Site', category: 'Graphics', seed: 'linnet-p5' },
  { title: 'Coding Dashboard', category: 'Coding', seed: 'linnet-p6' },
  { title: 'Web Application', category: 'Web Design', seed: 'linnet-p7' },
  { title: 'UI Prototype', category: 'UI/UX', seed: 'linnet-p8' },
]

export function Portfolio() {
  const [active, setActive] = useState<string>('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-500">Portfolio Project</h2>
          <p className="mt-3 text-gray-500">
            A selection of our recent work across various categories.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded px-5 py-2 text-sm font-semibold transition-colors ${
                active === cat
                  ? 'bg-primary-400 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((project) => (
            <div key={project.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${project.seed}/400/300`}
                alt={project.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy-500/0 transition-colors duration-300 group-hover:bg-navy-500/70">
                <span className="translate-y-4 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
