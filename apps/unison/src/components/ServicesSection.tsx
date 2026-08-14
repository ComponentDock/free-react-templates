import { services } from '../data'
import { SectionTitle } from './SectionTitle'

/** Services row (`.site-section.border-bottom.bg-light`): 6 icon cards with
 *  a blue lucide icon, title, lorem text and a Learn More link. */
export function ServicesSection() {
  return (
    <section
      id="services-section"
      className="border-b border-black/10 bg-soft py-[2.5em] md:py-[5em]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Our Services</SectionTitle>
        <p className="mx-auto max-w-2xl text-center font-light text-gray-500">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex items-start gap-4">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <service.icon aria-hidden="true" className="h-7 w-7 text-brand" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-heading">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{service.text}</p>
                <a
                  href="#services-section"
                  className="mt-3 inline-block text-sm font-medium text-brand hover:underline"
                >
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
