import { useState } from 'react'
import { projects } from '../content'
import { ProjectCard } from './ProjectCard'

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'coursework', label: 'Coursework' },
  { id: 'personal', label: 'Personal project' },
] as const

type FilterId = (typeof filters)[number]['id']

export function Work() {
  const [filter, setFilter] = useState<FilterId | null>(null)

  const visible =
    filter === null || filter === 'all'
      ? projects
      : projects.filter((project) => project.id === filter)
  const status =
    filter === null ? '' : `${visible.length} project${visible.length === 1 ? '' : 's'} shown`

  return (
    <section id="work" className="q-section">
      <div className="mb-9 flex items-end justify-between gap-[22px] max-[575px]:block">
        <h2 className="q-h2 m-0">
          <span className="mb-[14px] block font-sans text-[0.74rem] font-normal tracking-[0.04em] text-muted">
            01 / SELECTED PROJECTS
          </span>
          A few things
          <br />
          I’ve <em className="font-serif font-normal italic">worked on.</em>
        </h2>
        <p className="m-0 max-w-[320px] text-[0.9rem] leading-[1.75] text-muted max-[575px]:mt-[18px]">
          Small projects, real questions.
          <br />
          Here’s the thinking behind the final screen.
        </p>
      </div>

      <div role="group" aria-label="Filter projects" className="mb-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id || (filter === null && item.id === 'all')}
            onClick={() => setFilter(item.id)}
            className="q-pill"
          >
            {item.label}
          </button>
        ))}
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {status}
      </p>

      <div className="grid grid-cols-1 gap-[24px] min-[768px]:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
