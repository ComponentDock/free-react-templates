import {
  Cake,
  Camera,
  Music4,
  Plane,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'
import { SECTION_IDS, SERVICES, SERVICES_LEAD, SERVICES_TITLE, type ServiceIcon } from '../lib/site'
import {
  containerClass,
  serviceBodyClass,
  serviceCardClass,
  serviceIconClass,
  servicesGridClass,
  servicesSectionClass,
  serviceTitleClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

const ICONS: Record<ServiceIcon, LucideIcon> = {
  camera: Camera,
  makeup: Sparkles,
  catering: UtensilsCrossed,
  music: Music4,
  cake: Cake,
  honeymoon: Plane,
}

/**
 * The six-card grid: the design's own service list, each card a white block that lifts on hover
 * into a 10px radius and a rose-tinted shadow — and does the same on keyboard focus, which the
 * reference never offered.
 */
export function Services() {
  return (
    <section id={SECTION_IDS.services} className={servicesSectionClass}>
      <div className={containerClass}>
        <SectionTitle title={SERVICES_TITLE} lead={SERVICES_LEAD} ornament />

        <div className={servicesGridClass}>
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]

            return (
              <div key={service.title} className={serviceCardClass}>
                <Icon className={serviceIconClass} aria-hidden="true" />
                <h4 className={serviceTitleClass}>{service.title}</h4>
                <p className={serviceBodyClass}>{service.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
