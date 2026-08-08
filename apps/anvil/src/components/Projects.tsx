import { Play } from 'lucide-react'

const projects = [
  { seed: 'anvil-p1', alt: 'Steel plant with cranes at dusk' },
  { seed: 'anvil-p2', alt: 'Pipeline crossing a river valley' },
  { seed: 'anvil-p3', alt: 'Construction site with scaffolding' },
  { seed: 'anvil-p4', alt: 'Turbine hall interior' },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-paper py-16 dark:bg-gray-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm font-medium uppercase tracking-[3px] text-brand">
              Our work
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-ink dark:text-white sm:text-4xl">
              See Our Video
            </h2>
            <p className="mt-4 leading-relaxed text-ink/60 dark:text-white/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla
              inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis
              libero vitae repellendus temporibus vero sit natus.
            </p>
            <p className="mt-4 leading-relaxed text-ink/60 dark:text-white/60">
              Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus
              velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero
              quaerat excepturi.
            </p>
          </div>

          <a
            href="#projects"
            aria-label="Play the Anvil company video"
            className="group relative block aspect-video overflow-hidden rounded-lg bg-coal"
          >
            <img
              src="https://picsum.photos/seed/anvil-video/800/450"
              alt="Anvil industrial facilities video cover"
              className="h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-60"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 fill-current" aria-hidden="true" />
              </span>
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <figure
              key={project.seed}
              className="overflow-hidden rounded-lg bg-white dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/600/400`}
                alt={project.alt}
                className="h-48 w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-ink/70 dark:text-white/70">
                {project.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
