import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const filters = ['All', 'Web Design', 'Mobile App', 'Web Development'] as const

const projects = [
  { title: 'Web design & development', category: 'Web Design', seed: 'doflo-proj-1' },
  { title: 'Mobile app redesign', category: 'Mobile App', seed: 'doflo-proj-2' },
  { title: 'Web design & development', category: 'Web Development', seed: 'doflo-proj-3' },
  { title: 'Brand identity system', category: 'Web Design', seed: 'doflo-proj-4' },
]

export function Portfolio() {
  const [active, setActive] = useState<string>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Projects</h2>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active === f
                    ? 'bg-brand-400 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                )}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((proj) => (
            <div key={proj.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${proj.seed}/600/400`}
                alt={proj.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
