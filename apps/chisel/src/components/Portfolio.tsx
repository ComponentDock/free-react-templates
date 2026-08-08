import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const projects = [
  { title: 'Project Title One', seed: 'chisel-project-1' },
  { title: 'Project Title Two', seed: 'chisel-project-2' },
  { title: 'Project Title Three', seed: 'chisel-project-3' },
  { title: 'Project Title Four', seed: 'chisel-project-4' },
] as const

export function Portfolio() {
  const [index, setIndex] = useState(0)
  const project = projects[index]!

  return (
    <section
      id="portfolio"
      aria-label="Portfolio"
      className="bg-white py-20 dark:bg-gray-950 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-xs font-bold uppercase tracking-[3px] text-brand">
          Portfolio
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <img
            src={`https://picsum.photos/seed/${project.seed}/800/600`}
            alt={project.title}
            className="h-[300px] w-full rounded object-cover lg:h-[400px]"
          />

          <div>
            <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
              {project.title}
            </h3>
            <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
              A small river named Duden flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
            <p className="mt-6">
              <a
                href="#portfolio"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                See Case Study
              </a>
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => setIndex((i) => (i - 1 + projects.length) % projects.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white dark:hover:border-brand dark:hover:text-brand"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => setIndex((i) => (i + 1) % projects.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white dark:hover:border-brand dark:hover:text-brand"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
