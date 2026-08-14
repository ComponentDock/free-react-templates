import { services } from '../data'

/** Services section (source: section.home-blog-area, bg #0e0e0e, no title):
 *  three photo cards — Creative / Wedding / Nature Photography — each with a
 *  photo, a 26px white title (coral on hover) and a muted paragraph. */
export function Services() {
  return (
    <section id="services" className="bg-coal py-[65px] lg:py-[195px]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-[15px] lg:grid-cols-3 lg:px-[30px]">
        {services.map((service) => (
          <article key={service.title} className="mb-[30px]">
            <img
              src={service.image}
              alt=""
              className="mb-[30px] h-64 w-full object-cover"
              loading="lazy"
            />
            <h3 className="mb-[15px] font-heading text-[26px] font-medium text-white transition-colors hover:text-brand">
              <a href="#services" className="transition-colors hover:text-brand">
                {service.title}
              </a>
            </h3>
            <p className="pr-[50px] text-base font-light leading-[1.9] text-muted">
              {service.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
