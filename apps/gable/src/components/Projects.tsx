import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const projects = [
  { title: 'Home Interior Design', image: 'https://picsum.photos/seed/gable-2/600/450' },
  { title: 'Office Interior Design', image: 'https://picsum.photos/seed/gable-3/600/450' },
  { title: 'Apartment Design', image: 'https://picsum.photos/seed/gable-4/600/450' },
  { title: 'Dining Table', image: 'https://picsum.photos/seed/gable-5/600/450' },
  { title: 'Workspace Design', image: 'https://picsum.photos/seed/gable-6/600/450' },
  { title: 'Lounge Design', image: 'https://picsum.photos/seed/gable-7/600/450' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-dark">
              Selected work
            </p>
            <h2 className="font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
              Our Projects
            </h2>
          </div>
          <ButtonLink
            href="#contact"
            variant="primary"
            className="rounded-full px-6 py-3 font-sans text-sm font-bold uppercase"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-paper dark:border-white/10 dark:bg-gray-900"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-mist dark:text-white/50">Interior Architecture</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
