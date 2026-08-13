import { SERVICES, SERVICES_HEADING, SERVICES_LEAD, SERVICES_LINK } from '../data'
import { MoreLink } from './MoreLink'

/* div.site-section — "Our Featured Services": heading + subtext + "Learn
   More" link, then a 2×2 grid of .media-92812 cards — photo, small caption
   label (Architecture / Gym & Arena / Interior Design / Product Design),
   uppercase title and a "Learn More" arrow link. */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-[20px] leading-snug font-bold text-ink uppercase">
            {SERVICES_HEADING}
          </h2>
          <p className="mt-4 mb-8 leading-relaxed text-ink/70">{SERVICES_LEAD}</p>
          <MoreLink href="#projects">{SERVICES_LINK}</MoreLink>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
          {SERVICES.map((service) => (
            <article key={service.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-[13px] tracking-wide text-faint uppercase">
                {service.caption}
              </p>
              <h3 className="mt-1 text-[18px] font-bold text-ink uppercase">
                <a href="#projects" className="transition-colors hover:text-brand">
                  {service.title}
                </a>
              </h3>
              <MoreLink href="#projects" className="mt-3">
                {SERVICES_LINK}
              </MoreLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
