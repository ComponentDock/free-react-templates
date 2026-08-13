import { ArrowRight, Building2, Factory, FlaskConical, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services, type ServiceIcon } from '../data'

const icons: Record<ServiceIcon, LucideIcon> = {
  factory: Factory,
  building: Building2,
  wrench: Wrench,
  flask: FlaskConical,
}

/** Light-gray services section with a red tick bar, eyebrow + heading and
 *  four white cards (red line icon, title, Learn More link). */
export function Services() {
  return (
    <section id="services" className="bg-section py-[100px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-[70px] flex items-start gap-4">
          <span className="mt-3 h-11 w-1 shrink-0 bg-brand" aria-hidden="true" />
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-brand">
              {services.eyebrow}
            </span>
            <h2 className="mt-2 max-w-2xl text-4xl font-normal leading-tight">
              {services.heading}
            </h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article
                key={service.title}
                className="rounded-[5px] bg-white px-5 pb-6 pt-[30px] text-center shadow-sm transition-all duration-300 hover:shadow-[0_20px_30px_rgba(35,47,85,0.1)]"
              >
                <Icon
                  className="mx-auto mb-6 h-12 w-12 text-brand"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-medium text-black">{service.title}</h3>
                <a
                  href="#services"
                  className="mt-4 inline-flex items-center text-base text-brand transition-colors hover:text-black"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
