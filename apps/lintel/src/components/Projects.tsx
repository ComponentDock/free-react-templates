import { ArrowRight } from 'lucide-react'

const projects = [
  { seed: 'lintel-proj-1', tall: true },
  { seed: 'lintel-proj-2', tall: false },
  { seed: 'lintel-proj-3', tall: false },
  { seed: 'lintel-proj-4', tall: true },
] as const

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold uppercase text-ink dark:text-white">Our Projects</h2>
          <a
            href="#projects"
            className="text-xs font-bold uppercase text-ink transition-colors hover:text-brand dark:text-white"
          >
            View All Projects <ArrowRight className="inline h-3 w-3" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.seed} className="group">
              <a href="#projects" className="block overflow-hidden bg-slate">
                <img
                  src={`https://picsum.photos/seed/${project.seed}/640/480`}
                  alt="Downside Up House project photo"
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    project.tall ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                  loading="lazy"
                />
              </a>
              <h3 className="mt-5 text-base font-bold text-ink dark:text-white">
                <a href="#projects" className="transition-colors hover:text-brand">
                  Downside Up House
                </a>
              </h3>
              <span className="text-sm text-mist dark:text-white/60">Melbourne, Australia</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
