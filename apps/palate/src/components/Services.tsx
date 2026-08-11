import { Cake, Users, UtensilsCrossed, type LucideIcon } from 'lucide-react'
import { SERVICES, SERVICES_SCRIPT, SERVICES_TITLE, type ServiceIconName } from '../data'
import { SectionHeading } from './SectionHeading'

const ICONS: Record<ServiceIconName, LucideIcon> = {
  cake: Cake,
  meeting: Users,
  tray: UtensilsCrossed,
}

/* .block-6.services — light #fafafa section, 3 centered cards: 130px BLACK
   circle with an orange flaticon glyph, h3 title + lorem paragraph. */
export function Services() {
  return (
    <section className="bg-mist px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading script={SERVICES_SCRIPT} title={SERVICES_TITLE} />

        <div className="grid gap-10 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto flex h-[130px] w-[130px] items-center justify-center rounded-full bg-ink">
                  <Icon aria-hidden="true" className="h-12 w-12 text-brand" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-[22px] font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-body">{service.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
