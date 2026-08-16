import { Headphones, RotateCcw, ShieldCheck, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data'

type ServiceIconName = 'truck' | 'shield' | 'refund' | 'support'

const icons: Record<ServiceIconName, LucideIcon> = {
  truck: Truck,
  shield: ShieldCheck,
  refund: RotateCcw,
  support: Headphones,
}

/* Reference: div.categories-area — four centered columns, each with an svg
   icon, an h5 title and the repeated sub-line "Free delivery on all
   orders". */
export function ServicesStrip() {
  return (
    <section aria-label="Why shop with us" className="bg-white pt-4 pb-20">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <div key={service.title} className="mb-[50px] text-center">
              <Icon className="mx-auto text-brand" size={36} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-medium text-charcoal">{service.title}</h3>
              <p className="mt-1 text-sm text-copy">{service.subline}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
