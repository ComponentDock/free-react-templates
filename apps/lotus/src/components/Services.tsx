import { services } from '../data'

export function Services() {
  return (
    <section id="services" aria-label="Our services" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-medium text-ink md:text-4xl">Explore our services</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Three focused programs, one goal: a stronger, calmer, more capable you.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="bg-white p-10 text-center shadow-sm">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-ink">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-medium text-ink">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
