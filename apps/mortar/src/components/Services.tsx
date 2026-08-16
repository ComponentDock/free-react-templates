import { Building, HardHat, Ruler } from 'lucide-react'
import { services } from '../data'

const serviceIcons = [HardHat, Building, Ruler] as const

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {services.kicker}
        </span>
        <h2 className="mt-2 text-4xl font-medium text-ink md:text-5xl">{services.heading}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index]!
            return (
              <article
                key={service.title}
                className="rounded bg-white p-8 shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_24px_48px_-13px_rgba(0,0,0,0.12)]"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded bg-brand/10 text-brand">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-medium text-charcoal">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-500">{service.blurb}</p>
                <a
                  href="#services"
                  className="mt-5 inline-block font-semibold text-brand transition-colors hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {services.learnMore}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
