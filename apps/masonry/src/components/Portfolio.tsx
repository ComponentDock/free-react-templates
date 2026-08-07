import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const projects = [
  { title: 'Skyline House', tag: 'Residential' },
  { title: 'Harbor Office', tag: 'Commercial' },
  { title: 'Atrium Museum', tag: 'Cultural' },
  { title: 'Riverside Loft', tag: 'Interior' },
  { title: 'Pavilion Pavilion', tag: 'Public' },
  { title: 'Courtyard Villa', tag: 'Residential' },
] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Recent Work</p>
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            Our Portfolio Museum
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            A curated selection of featured projects — every building tells the story of its place,
            program, and people.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="font-display text-xl font-bold uppercase tracking-wider text-ink dark:text-white">
            Featured Projects
          </h3>
        </div>

        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="group overflow-hidden border border-gray-100 bg-paper transition-colors hover:border-brand dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/astral-project-${i + 1}/600/400`}
                alt={`${project.title} — ${project.tag}`}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h4 className="font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
                  {project.title}
                </h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {project.tag}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="rounded-none bg-brand px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
          >
            View All Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
