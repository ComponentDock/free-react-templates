import { services } from '../data'

/** Numbered four-column services strip (01–04) on the dark background. */
export function Services() {
  return (
    <section aria-label="Services" className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.number}>
            <span className="text-lg font-semibold text-brand">{service.number}</span>
            <h3 className="mt-3 text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
