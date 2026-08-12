import { CreditCard, Headphones, ShieldCheck, Truck, type LucideIcon } from 'lucide-react'
import { SERVICES, type ServiceIcon } from '../data'

const ICONS: Record<ServiceIcon, LucideIcon> = {
  truck: Truck,
  shield: ShieldCheck,
  headphones: Headphones,
  card: CreditCard,
}

/* services — four benefit items with red circular icons, mirroring the
   original's services row. */
export function Services() {
  return (
    <section className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.icon]
          return (
            <div key={service.title} className="flex flex-col items-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink dark:text-white">
                {service.title}
              </h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}
