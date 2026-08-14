import { Dumbbell, Shield, Swords, Target, type LucideIcon } from 'lucide-react'
import { services, type ServiceIcon } from '../data'

const icons: Record<ServiceIcon, LucideIcon> = {
  target: Target,
  dumbbell: Dumbbell,
  shield: Shield,
  swords: Swords,
}

export function Services() {
  return (
    <section aria-label="Services" className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {services.map((service) => {
          const Icon = icons[service.icon]
          return (
            <div key={service.title} className="rounded-md bg-white p-8 text-center shadow-sm">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-dark">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
