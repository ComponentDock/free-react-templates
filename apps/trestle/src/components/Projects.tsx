import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

type Category = 'all' | 'restaurations' | 'buildings' | 'apartments'

const filters: ReadonlyArray<{ id: Category; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'restaurations', label: 'Restaurations' },
  { id: 'buildings', label: 'Buildings' },
  { id: 'apartments', label: 'Apartments' },
]

const projects: ReadonlyArray<{
  title: string
  date: string
  category: Exclude<Category, 'all'>
  image: string
}> = [
  {
    title: 'Biggest Restaurations',
    date: 'Jan 19, 2018',
    category: 'restaurations',
    image: 'https://picsum.photos/seed/trestle-proj-1/640/480',
  },
  {
    title: 'Office Building',
    date: 'Jan 19, 2018',
    category: 'buildings',
    image: 'https://picsum.photos/seed/trestle-proj-2/640/480',
  },
  {
    title: 'Lakeside Apartments',
    date: 'Jan 19, 2018',
    category: 'apartments',
    image: 'https://picsum.photos/seed/trestle-proj-3/640/480',
  },
  {
    title: 'Heritage Hotel Restauration',
    date: 'Jan 19, 2018',
    category: 'restaurations',
    image: 'https://picsum.photos/seed/trestle-proj-4/640/480',
  },
  {
    title: 'Metro Tower',
    date: 'Jan 19, 2018',
    category: 'buildings',
    image: 'https://picsum.photos/seed/trestle-proj-5/640/480',
  },
  {
    title: 'Garden Court Apartments',
    date: 'Jan 19, 2018',
    category: 'apartments',
    image: 'https://picsum.photos/seed/trestle-proj-6/640/480',
  },
] as const

export function Projects() {
  const [active, setActive] = useState<Category>('all')

  return (
    <section id="projects" className="py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-block bg-brand px-3 py-1 text-xs font-black uppercase tracking-widest text-ink">
              Our work
            </span>
            <h2 className="mt-5 text-3xl font-black text-ink sm:text-4xl dark:text-white">
              Projects
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                aria-pressed={active === filter.id}
                className={cn(
                  'border-2 border-ink px-5 py-2 text-sm font-black uppercase tracking-wide text-ink transition-colors hover:bg-brand dark:border-white dark:text-white',
                  active === filter.id && 'bg-brand hover:bg-brand',
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const hidden = active !== 'all' && project.category !== active
            return (
              <li
                key={project.title}
                className={cn('group relative overflow-hidden', hidden && 'hidden')}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-6">
                  <h3 className="text-xl font-black text-white">{project.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand">
                    {project.date}
                  </p>
                  <a
                    href="#projects"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-white underline-offset-4 hover:text-brand hover:underline"
                  >
                    See Project
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
