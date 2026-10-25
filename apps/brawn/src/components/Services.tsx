import { Award, Dumbbell, HeartPulse, Warehouse, type LucideIcon } from 'lucide-react'
import { SERVICES, type Service } from '../content'
import { Container } from './ui'

const ICONS: Record<Service['icon'], LucideIcon> = {
  award: Award,
  warehouse: Warehouse,
  heart: HeartPulse,
  dumbbell: Dumbbell,
}

/**
 * Four cards, each a 90 px square rotated 45° with a 2 px blue border, radius
 * 7 px and a 48 px grey glyph rotated back to upright.
 */
export function Services() {
  return (
    <section id="services" aria-label="What the gym offers" className="band bg-white">
      <Container>
        <ul className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <li key={service.title} className="px-2 text-center">
                <div className="diamond mx-auto">
                  <Icon aria-hidden="true" className="h-12 w-12 text-body" strokeWidth={1.2} />
                </div>
                <h3 className="mt-8 font-display text-[1.2rem] leading-[1.5] font-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-[1.05rem] leading-[1.8] text-body">{service.copy}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
