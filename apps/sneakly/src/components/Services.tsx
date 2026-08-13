import { CreditCard, Headphones, ShoppingBag } from 'lucide-react'
import { services } from '../data'

const icons = {
  bag: ShoppingBag,
  support: Headphones,
  payment: CreditCard,
} as const

/** Three centered benefit columns with circular line-art icons: Free
 *  Shipping, Support Customer, Secure Payments (reference .ftco-services). */
export function Services() {
  return (
    <section data-testid="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:grid-cols-3 md:px-8">
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <div key={service.title} className="flex flex-col items-center px-4 text-center">
              <div className="mb-6 flex h-[110px] w-[110px] items-center justify-center rounded-full">
                <Icon className="h-[70px] w-[70px] text-ink" aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-base font-bold text-ink">{service.title}</h3>
              <p className="text-sm text-body">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
