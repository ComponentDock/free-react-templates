import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { services } from '../data'

const PER_VIEW = 3

/** Services carousel on a light-grey band: photo cards with a red "View
 *  Details" box revealed on hover, plus owl-style prev/next arrows. */
export function Services() {
  const [page, setPage] = useState(0)
  const pages = Math.max(1, services.length - PER_VIEW + 1)

  const prev = () => setPage((p) => Math.max(0, p - 1))
  const next = () => setPage((p) => Math.min(pages - 1, p + 1))

  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="font-display text-4xl font-semibold uppercase text-ink">
            <span className="text-brand">/ </span>Services We Offer
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous services"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted text-body transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next services"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-muted text-body transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(page, page + PER_VIEW).map((service) => (
            <article key={service.title} className="group">
              <div className="relative mb-6 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/stalwart-service-${service.title.toLowerCase()}/600/420`}
                  alt={service.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand px-4 py-6 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Details
                </span>
              </div>
              <h3 className="mb-3 font-display text-2xl font-medium text-ink">{service.title}</h3>
              <p className="text-base leading-relaxed text-body">{service.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
