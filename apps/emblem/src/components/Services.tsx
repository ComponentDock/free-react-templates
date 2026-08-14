import { services, servicesBackdrop } from '../data'

/** Emblem "More Services" grid: six centered cards on a photo backdrop, each
 *  with a 90px circular red-bordered icon, white title and translucent
 *  paragraph. */
export function Services() {
  return (
    <section
      id="services"
      aria-label="More services"
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${servicesBackdrop})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-light text-white lg:text-[2.5rem]">More Services</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/80">
          Everything you need to launch, grow and scale — under one roof.
        </p>
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="px-4">
              <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full border-4 border-brand">
                <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-white/50">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
