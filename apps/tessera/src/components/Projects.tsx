import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type Category = 'Interior' | 'Exterior' | 'Landscape'

const tabs: ReadonlyArray<{ label: string; category: Category | 'All' }> = [
  { label: 'All Work', category: 'All' },
  { label: 'Interior', category: 'Interior' },
  { label: 'Exterior', category: 'Exterior' },
  { label: 'Landscape', category: 'Landscape' },
]

const projects: ReadonlyArray<{ title: string; category: Category }> = [
  { title: 'Office Interior Design', category: 'Interior' },
  { title: 'Interior Design', category: 'Interior' },
  { title: 'Office Interior Design', category: 'Interior' },
  { title: 'Exterior Design', category: 'Exterior' },
  { title: 'Office Interior Design', category: 'Interior' },
  { title: 'Landscape Design', category: 'Landscape' },
  { title: 'Exterior Design', category: 'Exterior' },
  { title: 'Office Interior Design', category: 'Interior' },
] as const

export function Projects() {
  const [active, setActive] = useState<Category | 'All'>('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="bg-white py-20 dark:bg-gray-950 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in.
          </p>
        </div>

        <div aria-label="Project categories" className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              aria-pressed={active === tab.category}
              onClick={() => setActive(tab.category)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors',
                active === tab.category
                  ? 'bg-brand text-white'
                  : 'bg-paper text-mist hover:text-brand dark:bg-gray-900 dark:text-white/60',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((project, i) => (
            <article
              key={`${project.title}-${i}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/tessera-work-${i + 1}/600/450`}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-xs font-medium uppercase tracking-[2px] text-white/70">
                  {project.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-white">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
