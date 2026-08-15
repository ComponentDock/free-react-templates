import { ArrowRight } from 'lucide-react'
import { services } from '../data'

export function Services() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="text-center">
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto h-52 w-full object-cover"
            />
            <h2 className="mt-5 px-5 text-lg font-semibold uppercase tracking-[2px] text-ink">
              {service.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xs px-5 text-sm font-light leading-6 text-muted">
              {service.blurb}
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              View Details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
