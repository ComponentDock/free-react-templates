import { useState } from 'react'
import { projectFilters, projects, projectsSubtext, projectsTitle } from '../data'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>(projectFilters[0])

  return (
    <section id="projects-section" className="bg-surface py-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-[34px] font-light text-ink">{projectsTitle}</h2>
          <p className="mt-4 text-[15px] leading-7 text-body">{projectsSubtext}</p>
        </div>

        <ul className="mb-12 flex flex-wrap justify-center gap-2" aria-label="Project filters">
          {projectFilters.map((filter) => {
            const active = filter === activeFilter
            return (
              <li key={filter}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    active
                      ? 'rounded-[5px] bg-brand px-5 py-2 text-sm text-white'
                      : 'rounded-[5px] px-5 py-2 text-sm text-body transition-colors hover:text-brand'
                  }
                >
                  {filter}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[5px] bg-white">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-[240px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="px-6 pb-6 pt-5 text-lg font-medium text-ink">
                <a href="#projects-section" className="transition-colors hover:text-brand">
                  {project.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
