import { services } from '../data'

/** Three numbered service cards (01 / 02 / 03) with a title and blurb. */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.number} className="border-t border-body/20 pt-6">
              <span className="font-display text-base font-medium text-brand-dark">
                {service.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-ink lg:text-[1.75rem]">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed">{service.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
