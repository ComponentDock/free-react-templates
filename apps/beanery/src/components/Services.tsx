import { services, servicesImage } from '../data'

/* Full-bleed background-image band with four centered service cards:
   an icon in a circular outline and a short white description. */
export function Services() {
  return (
    <section
      aria-label="Our services"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${servicesImage})` }}
    >
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.text} className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-copper">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <p className="mx-auto mt-6 max-w-[240px] text-lg font-light leading-relaxed text-white">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
