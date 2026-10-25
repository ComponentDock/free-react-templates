import { Reveal } from './Reveal'
import { services } from '../content'

/**
 * Three cells separated by a single hairline: the `bg-ink-100` ground under a
 * `gap-px` grid inside one clipped, rounded frame. Never three cards.
 */
export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-primary-700 uppercase dark:text-primary-400">
            {services.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-ink-500 dark:text-gray-400">{services.lede}</p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3 dark:border-gray-800 dark:bg-gray-800">
          {services.items.map((service) => (
            <div
              key={service.name}
              className="flex flex-col bg-white p-6 lg:p-8 dark:bg-gray-950"
            >
              <h3 className="text-lg font-bold text-ink-800 dark:text-white">{service.name}</h3>
              <p className="mt-2 flex-1 text-ink-500 dark:text-gray-400">{service.blurb}</p>
              <p className="mt-4 text-sm font-bold text-primary-700 dark:text-primary-300">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
