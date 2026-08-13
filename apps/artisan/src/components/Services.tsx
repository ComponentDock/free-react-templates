import { BarChart3, Database, Monitor, Smartphone } from 'lucide-react'
import { services } from '../data'
import { SectionTitle } from './SectionTitle'

const serviceIntro =
  'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.'

const serviceIcons = {
  terracotta: Monitor,
  mauve: Smartphone,
  coral: Database,
  periwinkle: BarChart3,
} as const

const serviceColors = {
  terracotta: 'bg-terracotta',
  mauve: 'bg-mauve',
  coral: 'bg-brand',
  periwinkle: 'bg-periwinkle',
} as const

export function Services() {
  return (
    <section id="service" className="bg-mist py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Service Offers" intro={serviceIntro} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.color]
            return (
              <article
                key={service.title}
                className={`service-card rounded-[5px] p-9 text-white ${serviceColors[service.color]}`}
              >
                <Icon className="h-12 w-12" aria-hidden="true" />
                <h3 className="mt-6 font-sans text-[21px] font-bold leading-snug">
                  {service.title}
                </h3>
                <p className="mt-4 font-body text-[15px] leading-[1.7] text-white/90">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
