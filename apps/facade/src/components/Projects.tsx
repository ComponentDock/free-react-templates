import { useState } from 'react'
import { Badge, Button, cn } from '@free-react-templates/ui'

const filters = ['All', 'Popular', 'Latest', 'Following', 'Upcoming'] as const
type Filter = (typeof filters)[number]

const projects = [
  { title: 'Dell Villa, New York', tag: 'Following' },
  { title: 'Eedn Park, Singapore', tag: 'Latest' },
  { title: 'Sky Build, Paris', tag: 'Popular' },
  { title: 'Dell Villa, New York', tag: 'Following' },
] as const

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = projects.filter((project) => filter === 'All' || project.tag === filter)

  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Recent Work</p>
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            View Our Project
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <Button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'rounded-none border px-6 py-2 font-display text-sm font-semibold uppercase tracking-wider',
                filter === f
                  ? 'border-brand bg-brand text-white'
                  : 'border-gray-300 bg-transparent text-ink hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300',
              )}
            >
              {f}
            </Button>
          ))}
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {visible.map((project, i) => (
            <li
              key={`${project.title}-${i}`}
              className="overflow-hidden border border-gray-100 bg-paper transition-colors hover:border-brand dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/arclabs-project-${i + 1}/600/400`}
                alt={project.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink dark:text-white">
                  {project.title}
                </h3>
                <Badge className="mt-3 rounded-none bg-brand/10 text-brand">
                  Architecture, Modern Design
                </Badge>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
