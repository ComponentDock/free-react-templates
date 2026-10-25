import { services } from '../content'
import { SectionHeading, containerClass, sectionClass } from './ui'

/**
 * Six tiles ruled like one plate: the 1 px `gap` over an `ink-100` ground *is* the
 * divider, so the wrapper carries the colour and the cells stay white.
 */
export function Services() {
  return (
    <section id="services" className={`bg-white ${sectionClass} dark:bg-gray-950`}>
      <div className={containerClass}>
        <SectionHeading title={services.title} lead={services.lead} eyebrow={services.eyebrow} />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3 dark:border-gray-800 dark:bg-gray-800">
          {services.items.map((item) => (
            <div key={item.title} className="flex flex-col bg-white p-6 lg:p-8 dark:bg-gray-950">
              <h3 className="text-lg leading-7 font-bold tracking-[-0.45px] text-ink-800 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-base leading-6 text-ink-500 dark:text-gray-400">
                {item.body}
              </p>
              <p className="mt-4 text-sm leading-5 font-bold text-primary-700 dark:text-primary-400">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-5 text-ink-400 dark:text-gray-500">{services.footnote}</p>
      </div>
    </section>
  )
}
