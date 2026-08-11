import { Button } from '@free-react-templates/ui'
import { projectCtaLabel, projects, projectsTitle } from '../data'

/** White projects section: a two-column grid of six numbered showcase cards
 *  (number, name, one-liner, accent CTA) — the roundup article's numbered
 *  entries repurposed as a portfolio grid. */
export function Projects() {
  return (
    <section id="projects" aria-label={projectsTitle} className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-ink lg:text-4xl">{projectsTitle}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="flex flex-col rounded-xl border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-meta">{project.number}</span>
              <h3 className="mt-2 text-xl font-semibold text-ink">{project.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{project.description}</p>
              <Button className="mt-6 w-fit rounded bg-accent text-sm font-medium text-white hover:bg-accent-dark">
                {projectCtaLabel}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
