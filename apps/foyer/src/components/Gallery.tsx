import { ArrowRight } from 'lucide-react'

const projects = [
  { seed: 'foyer-g1', caption: 'Lavendar ambient interior' },
  { seed: 'foyer-g2', caption: 'Ambient interior' },
  { seed: 'foyer-g3', caption: 'Modern living room' },
] as const

export function Gallery() {
  return (
    <section id="projects" className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-brand">Our works</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Recent Works may impress you
          </h2>
          <p className="mt-4 leading-relaxed text-ink/60 dark:text-white/60">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <figure
              key={project.seed}
              className="group overflow-hidden rounded-lg bg-paper dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.caption}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="p-5">
                <p className="font-display text-lg font-bold text-ink dark:text-white">
                  {project.caption}
                </p>
                <a
                  href="#projects"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase text-brand transition-colors hover:text-brand-dark"
                >
                  More Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
