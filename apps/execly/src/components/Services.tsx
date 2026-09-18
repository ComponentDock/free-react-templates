import { Rocket, Wand2, Gift, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { services } from '../data'

const iconMap = { Rocket, Wand2, Gift, Phone } as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-semibold text-heading">{services.title}</h1>
          <p className="text-body-text">{services.subtitle}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="text-center">
                <Icon className="mx-auto mb-4 text-brand" size={40} />
                <h4 className="mb-3 text-lg font-semibold text-heading">{item.title}</h4>
                <p className="mb-6 text-sm text-body-text">{item.description}</p>
                <ButtonLink
                  href="#"
                  className="inline-block rounded-full border-2 border-brand px-6 py-2 text-xs font-semibold uppercase text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  View Details
                </ButtonLink>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
