import { useState } from 'react'

const categories = ['All', 'Branding', 'Creative', 'Web Design'] as const
type Category = (typeof categories)[number]

const projects = [
  { title: '3D Helmet Design', category: 'Branding' as Category, seed: 'drifter-proj-1' },
  { title: '3D Helmet Design', category: 'Creative' as Category, seed: 'drifter-proj-2' },
  { title: '3D Helmet Design', category: 'Web Design' as Category, seed: 'drifter-proj-3' },
  { title: '3D Helmet Design', category: 'Branding' as Category, seed: 'drifter-proj-4' },
  { title: '3D Helmet Design', category: 'Creative' as Category, seed: 'drifter-proj-5' },
  { title: '3D Helmet Design', category: 'Web Design' as Category, seed: 'drifter-proj-6' },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-heading">
          Our Recent Completed Projects
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-body-muted">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price.
        </p>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-brand-purple text-white'
                  : 'bg-light-bg text-body-muted hover:text-heading'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div key={`${project.seed}-${i}`} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-heading/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/70">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
