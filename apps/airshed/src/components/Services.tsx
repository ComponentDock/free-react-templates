import { SERVICES } from '../content'
import { BandHeading, Container, Reveal } from './ui'

/**
 * Six priced services as one bordered block: a 1 px gap over an ink-100 ground
 * inside a 16 px rounded shell, so the hairlines are the gutters and every card
 * in a row shares a height.
 */
export function Services() {
  return (
    <section id="services" className="section bg-white dark:bg-gray-950">
      <Container>
        <Reveal>
          <BandHeading
            eyebrow={SERVICES.eyebrow}
            heading={SERVICES.heading}
            lede={SERVICES.lede}
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 dark:border-gray-800 dark:bg-gray-800">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.items.map((service, index) => (
              <Reveal key={service.id} delay={index * 50}>
                <article
                  id={service.id}
                  className="flex h-full flex-col bg-white p-6 lg:p-8 dark:bg-gray-950"
                >
                  <h3 className="text-lg font-bold leading-7 text-ink-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-base leading-6 text-ink-500 dark:text-gray-300">
                    {service.body}
                  </p>
                  <p className="mt-4 text-sm font-bold leading-5 text-primary-700 dark:text-primary-300">
                    {service.price}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-6 text-sm leading-5 text-ink-400 dark:text-gray-400">{SERVICES.note}</p>
      </Container>
    </section>
  )
}
