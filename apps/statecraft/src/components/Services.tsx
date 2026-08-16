import { services } from '../data'

/** Brand-yellow services band with three image cards, each with a title,
 *  trust blurb and an ink-outlined "Learn More" link. */
export function Services() {
  return (
    <section id="services" className="bg-brand py-[100px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-serif text-base uppercase tracking-wide text-olive">Services</span>
          <h2 className="mt-5 text-4xl font-bold leading-[1.2] text-ink lg:text-[46px]">
            The gain insights, advice and tools to achieve your mission-critical priorities
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title}>
              <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
              <div className="pt-6">
                <h3 className="font-serif text-[26px] font-bold text-ink">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-olive">{service.blurb}</p>
                <a href="#contact" className="btn-outline-ink mt-6">
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
