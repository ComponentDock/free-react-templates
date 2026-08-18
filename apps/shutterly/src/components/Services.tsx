import { services } from '../data'

export function Services() {
  return (
    <section id="services" className="bg-services-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <h2 className="font-display text-[40px] font-light text-ink">I do for you</h2>
          <span className="mt-2 block text-sm text-muted">What I can do for your next chapter</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.id}>
              <img
                src={service.image}
                alt={service.title}
                className="mb-6 h-64 w-full object-cover"
              />
              <span className="mb-3 block text-sm text-meta">{service.meta}</span>
              <h3 className="font-display text-[30px] font-light leading-snug text-ink">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-body">{service.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
