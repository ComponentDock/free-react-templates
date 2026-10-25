import { services, servicesFootnote } from '../data'
import { HairlineGrid } from './HairlineGrid'

/**
 * The services band — the price block's twin: same hairline device, six cells,
 * a price line each, and one word (`Free`) standing in for the reminder.
 */
export function Services() {
  return (
    <section id="services" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            Testing, repairs and the paperwork
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            The test is the service most customers buy. The rest of this list is what a failing
            device needs, priced so you can see it before you agree to anything.
          </p>
        </div>

        <HairlineGrid cells={services} label="Services" />

        <p className="mt-6 text-sm text-ink-400">{servicesFootnote}</p>
      </div>
    </section>
  )
}
