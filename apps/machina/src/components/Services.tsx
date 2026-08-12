import { Cog, Hammer, Wrench } from 'lucide-react'
import { SERVICES, SERVICES_BG, SERVICES_VIEW_MORE_LABEL } from '../data'

const serviceIcons = {
  cog: Cog,
  wrench: Wrench,
  hammer: Hammer,
} as const

/**
 * Services — three white cards over a full-bleed fixed-attachment photo
 * (source `div.service-area.section-bg`, `background-attachment: fixed`),
 * each with an icon, heading, description, and a red "View More" link.
 */
export function Services() {
  return (
    <section
      aria-label="Services"
      className="bg-cover bg-fixed py-24"
      style={{ backgroundImage: `url(${SERVICES_BG})` }}
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 lg:px-6">
        {SERVICES.map((service) => {
          const Icon = serviceIcons[service.icon]
          return (
            <div key={service.title} className="bg-white p-8 shadow-lg">
              <Icon className="h-12 w-12 text-brand" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{service.text}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
              >
                {SERVICES_VIEW_MORE_LABEL}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
