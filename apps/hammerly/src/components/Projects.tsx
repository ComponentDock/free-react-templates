import { useState } from 'react'

const filters = [
  'All',
  'Buildings',
  'Interior',
  'Design',
  'Isolation',
  'Plumbing',
  'Tiling',
] as const

const projects = [
  { title: 'Modern Building', category: 'Buildings', seed: 'hammerly-proj-1' },
  { title: 'Interior Design', category: 'Interior', seed: 'hammerly-proj-2' },
  { title: 'Creative Space', category: 'Design', seed: 'hammerly-proj-3' },
  { title: 'Office Complex', category: 'Buildings', seed: 'hammerly-proj-4' },
  { title: 'Residential', category: 'Isolation', seed: 'hammerly-proj-5' },
  { title: 'Commercial', category: 'Plumbing', seed: 'hammerly-proj-6' },
  { title: 'Luxury Villa', category: 'Tiling', seed: 'hammerly-proj-7' },
  { title: 'City Tower', category: 'Buildings', seed: 'hammerly-proj-8' },
] as const

export function Projects() {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 border-l-4 border-brand pl-4">
          <h2 className="font-section text-3xl font-bold uppercase md:text-4xl">Our Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar filters */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-ink">
              Filter by
            </h3>
            <ul className="space-y-2">
              {filters.map((f) => (
                <li key={f}>
                  <button
                    type="button"
                    onClick={() => setActive(f)}
                    className={`w-full rounded px-4 py-2 text-left text-sm font-medium transition-colors ${
                      active === f ? 'bg-brand text-ink' : 'bg-paper text-body hover:bg-brand/20'
                    }`}
                  >
                    {f}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-3 md:grid-cols-3">
            {filtered.map((p) => (
              <div key={p.title} className="group relative overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/300`}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-dark/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-heading text-sm font-bold uppercase text-white">
                    {p.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
