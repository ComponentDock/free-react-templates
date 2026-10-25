import { PROJECTS, PROJECTS_COPY, img } from '../content'
import { BandHeading, Container } from './ui'

/**
 * Three cards, each ending in the pair a bid list is screened on: the value
 * band and the duration, pinned to the card foot by a hairline rule.
 */
export function Projects() {
  return (
    <section id="projects" className="section bg-ink-50 dark:bg-gray-900">
      <Container>
        <BandHeading
          eyebrow={PROJECTS_COPY.eyebrow}
          heading={PROJECTS_COPY.heading}
          lede={PROJECTS_COPY.lede}
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <li
              key={project.title}
              className="flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={img(project.seed, 800, 600)}
                alt={`${project.title} — completed installation`}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase leading-4 tracking-wide text-primary-600 dark:text-primary-400">
                  {project.sector}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-7 text-ink-800 dark:text-white">
                  <a href="#contact" className="transition-colors hover:text-primary-700">
                    {project.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink-500 dark:text-gray-300">
                  {project.blurb}
                </p>

                <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-ink-100 pt-4 dark:border-gray-800">
                  <div>
                    <dt className="text-xs font-medium text-ink-400 dark:text-gray-400">
                      {PROJECTS_COPY.valueLabel}
                    </dt>
                    <dd className="text-sm font-bold text-ink-800 dark:text-white">
                      {project.value}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-ink-400 dark:text-gray-400">
                      {PROJECTS_COPY.durationLabel}
                    </dt>
                    <dd className="text-sm font-bold text-ink-800 dark:text-white">
                      {project.duration}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
