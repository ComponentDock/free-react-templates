import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const categories = ['Architecture', 'Interior', 'Exterior', 'Drafting Landing'] as const

type Category = (typeof categories)[number]

type Project = {
  title: string
  category: Category
  badge: 'Exclusive Project' | 'New Project'
  seed: string
}

const projects: Project[] = [
  { title: 'Harbour Terraces', category: 'Architecture', badge: 'Exclusive Project', seed: 'manorly-project-1' },
  { title: 'Ridge House', category: 'Architecture', badge: 'New Project', seed: 'manorly-project-2' },
  { title: 'Court Arcade', category: 'Architecture', badge: 'Exclusive Project', seed: 'manorly-project-3' },
  { title: 'Lantern Block', category: 'Architecture', badge: 'New Project', seed: 'manorly-project-4' },
  { title: 'Atrium Loft', category: 'Interior', badge: 'Exclusive Project', seed: 'manorly-project-5' },
  { title: 'Quiet Studio', category: 'Interior', badge: 'New Project', seed: 'manorly-project-6' },
  { title: 'Cedar Kitchen', category: 'Interior', badge: 'New Project', seed: 'manorly-project-7' },
  { title: 'Glass Pavilion', category: 'Exterior', badge: 'Exclusive Project', seed: 'manorly-project-8' },
  { title: 'Stone Facade', category: 'Exterior', badge: 'New Project', seed: 'manorly-project-9' },
  { title: 'Site Plan Study', category: 'Drafting Landing', badge: 'Exclusive Project', seed: 'manorly-project-10' },
]

export function Projects() {
  const [active, setActive] = useState<Category>('Architecture')
  const visible = projects.filter((project) => project.category === active)

  return (
    <section id="projects" className="bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          <span>our</span>
          <span className="h-px w-12 bg-ink/30" aria-hidden="true" />
          <span>project</span>
        </p>
        <h2 className="mt-6 text-3xl font-semibold leading-snug text-ink sm:text-4xl">
          Hello City We are leader in <span className="text-brand">Projects.</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={cn(
                'text-sm font-medium transition-colors',
                active === category ? 'text-brand' : 'text-muted hover:text-ink',
              )}
            >
              {category}
            </button>
          ))}
          <p aria-live="polite" className="ml-auto text-sm text-muted">
            {visible.length} projects in {active}
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.title} className="group relative overflow-hidden bg-white">
              <img
                src={`https://picsum.photos/seed/${project.seed}/640/720`}
                alt={`${project.title} — ${project.category.toLowerCase()} project`}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {project.badge}
              </span>
              <div className="px-5 py-5">
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">Etiam tortor aliquet habitant</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
