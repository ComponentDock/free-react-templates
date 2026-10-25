import { SERVICES, SERVICES_COPY } from '../content'
import { Container, Eyebrow } from './ui'

/**
 * Six routes in a hairline grid: the rules are a 1 px gap on an ink ground, not
 * borders, so the cells never double up their edges.
 */
export function Services() {
  return (
    <section id="services" className="section bg-white dark:bg-gray-950">
      <Container>
        <Eyebrow>{SERVICES_COPY.eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-4xl dark:text-white">
          {SERVICES_COPY.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-7 text-ink-500 dark:text-gray-300">
          {SERVICES_COPY.lede}
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-100 dark:border-gray-800">
          <div className="grid gap-px bg-ink-100 sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-800">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex flex-col bg-white p-8 dark:bg-gray-950"
              >
                <h3 className="text-lg font-bold leading-7 text-ink-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-6 text-ink-500 dark:text-gray-300">
                  {service.blurb}
                </p>
                <p className="mt-4 text-sm font-bold leading-5 text-primary-700 dark:text-primary-400">
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm leading-5 text-ink-400 dark:text-gray-400">
          {SERVICES_COPY.footnote}
        </p>
      </Container>
    </section>
  )
}
