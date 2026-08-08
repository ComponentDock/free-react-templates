import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const projects = [
  { title: 'City Villa', author: 'John Doe', alt: 'Contemporary villa with glass walls' },
  { title: 'Lake House', author: 'John Doe', alt: 'Timber lakeside house at dusk' },
  { title: 'Skyline Tower', author: 'John Doe', alt: 'High-rise tower against the sky' },
  { title: 'Garden Court', author: 'John Doe', alt: 'Courtyard surrounded by greenery' },
  { title: 'Loft Studio', author: 'John Doe', alt: 'Open-plan studio with exposed brick' },
  { title: 'Urban Terrace', author: 'John Doe', alt: 'Rooftop terrace with city view' },
] as const

export function Projects() {
  return (
    <section id="project" className="bg-paper py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
          Our Project
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[5px] border border-black/5 bg-white dark:border-white/10 dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/terracotta-project-${index + 1}/700/520`}
                  alt={project.alt}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {project.author}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold uppercase text-ink dark:text-white">
                  {project.title}
                </h3>
                <a
                  href="#project"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase text-brand transition-colors hover:text-brand-dark"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#blog"
            className="rounded-[5px] bg-brand px-8 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
          >
            View All Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
