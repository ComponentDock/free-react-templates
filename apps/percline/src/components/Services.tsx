import { SERVICES } from '../content'
import { Reveal } from './Reveal'

/**
 * Six cells in a hairline grid: the grid's ground shows through 1 px gaps, so
 * the rules are the container rather than borders on the cells.
 */
export function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-primary-700">
            {SERVICES.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {SERVICES.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{SERVICES.lede}</p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.items.map((item) => (
              <li key={item.name} className="flex flex-col bg-white p-6 lg:p-8">
                <h3 className="text-lg font-bold text-ink-800">{item.name}</h3>
                <p className="mt-2 flex-1 text-ink-500">{item.body}</p>
                <p className="mt-4 text-sm font-bold text-primary-700">{item.price}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-400">{SERVICES.footnote}</p>
        </Reveal>
      </div>
    </section>
  )
}
