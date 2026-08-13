import { Briefcase, Layers, Monitor, PenTool } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { services, type ServiceIcon } from '../data'

const iconMap: Record<ServiceIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  pen: PenTool,
  briefcase: Briefcase,
  monitor: Monitor,
  layers: Layers,
}

/** White "My Services" section: centered title with green underline and a
 *  2-column grid of four cards, each with a 50px green circular icon badge,
 *  a heading and a paragraph; hover lifts the card 2px with a deeper shadow. */
export function Services() {
  return (
    <section
      id="services-section"
      data-testid="services"
      className="bg-white py-[2.5em] md:py-[7em]"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title relative pb-5 text-center text-3xl">{services.heading}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.items.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <article
                key={service.title}
                data-testid={`service-${service.title}`}
                className="group flex h-full gap-6 bg-white p-[30px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_50px_-5px_rgba(0,0,0,0.1)]"
              >
                <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl text-ink">{service.title}</h3>
                  <p className="mt-2 text-body">{service.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
