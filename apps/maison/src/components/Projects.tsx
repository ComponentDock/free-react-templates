import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const projects = [
  {
    title: 'Smart Kitchen Setup with Vintage Style',
    blurb: 'A modern kitchen reimagined with vintage materials and warm lighting.',
    seed: 'maison-proj-1',
  },
  {
    title: 'Minimal Living Room Concept',
    blurb: 'Clean lines, soft neutrals, and furniture designed around daily rituals.',
    seed: 'maison-proj-2',
  },
  {
    title: 'Loft Renovation for Posh Living',
    blurb: 'An open-plan loft balancing raw structure with refined finishes.',
    seed: 'maison-proj-3',
  },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-dark">
          We are Maison
        </p>
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-5xl">
          Here are some of Our Latest Works
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist dark:text-white/60">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <img
                src={`https://picsum.photos/seed/${project.seed}/640/480`}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-5 font-display text-xl font-bold text-ink dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist dark:text-white/60">
                {project.blurb}
              </p>
              <ButtonLink
                href="#projects"
                className="mt-4 rounded-none bg-brand px-6 py-3 text-xs font-bold uppercase text-ink transition-colors hover:bg-brand-dark"
              >
                View Details <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
