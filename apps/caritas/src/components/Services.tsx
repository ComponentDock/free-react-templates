import { Baby, HandCoins, HeartHandshake, type LucideIcon } from 'lucide-react'
import { SERVICES, SERVICES_CAPTION, SERVICES_TITLE, type ServiceIconName } from '../data'
import { SectionTitle } from './SectionTitle'

/* .service_part — left H2 + caption, right 2×2 grid of 4 icon boxes
   (icon + H4 + lorem + colored text link). Top padding 268px on desktop
   clears the hero's hanging video block (245px) + section padding. */
const ICONS: Record<ServiceIconName, LucideIcon> = {
  donation: HandCoins,
  adoption: Baby,
  volunteer: HeartHandshake,
}

export function Services() {
  return (
    <section
      aria-label="Services"
      className="bg-white px-4 pt-[268px] pb-[140px] max-[991px]:pt-[110px] max-[991px]:pb-[70px]"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="max-w-md">
          <SectionTitle title={SERVICES_TITLE} caption={SERVICES_CAPTION} />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon]
            return (
              <div key={`${service.title}-${index}`} className="group">
                <Icon aria-hidden="true" className="h-12 w-12 text-brand" strokeWidth={1.5} />
                <h3 className="mt-6 text-[22px] font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-gray-600">{service.blurb}</p>
                <a
                  href={service.href}
                  className="mt-4 inline-block text-[15px] font-bold text-brand uppercase transition-colors group-hover:text-brand-pink"
                >
                  {service.linkLabel}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
