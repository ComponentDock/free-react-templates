import {
  SERVICES,
  SERVICES_EYEBROW,
  SERVICES_HEADING,
  SERVICES_LEDE,
  SERVICES_NOTE,
} from '../content'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-primary-700">
            {SERVICES_EYEBROW}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {SERVICES_HEADING}
          </h2>
          <p className="mt-4 text-lg text-ink-500">{SERVICES_LEDE}</p>
        </Reveal>
        <Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="flex flex-col bg-white p-6 lg:p-8">
                <h3 className="text-lg font-bold text-ink-800">{service.title}</h3>
                <p className="mt-2 flex-1 text-ink-500">{service.body}</p>
                <p className="mt-4 text-sm font-bold text-primary-700">{service.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-400">{SERVICES_NOTE}</p>
        </Reveal>
      </div>
    </section>
  )
}
