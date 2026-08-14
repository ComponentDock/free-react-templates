import { services } from '../data'

/** Services: centered title plus three icon cards. Icon tiles invert to the
 *  brand gradient on hover (white glyph on the gradient), mirroring the
 *  reference's .single-services hover state. */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold uppercase text-ink lg:text-4xl">
            My Offered Services
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted">
            At about this time of year, some months after New Year&apos;s resolutions have been made
            and kept, or made and neglected.
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group text-center transition-colors hover:bg-white"
              >
                <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#f9f9ff] text-ink transition-colors group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl font-medium text-ink">{service.title}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
