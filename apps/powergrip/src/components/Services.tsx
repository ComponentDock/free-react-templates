import { HeartPulse, Dumbbell, Swords, Shield } from 'lucide-react'
import { services, servicesTitle, servicesSubtitle } from '../data'

const iconMap = {
  'heart-pulse': HeartPulse,
  dumbbell: Dumbbell,
  swords: Swords,
  shield: Shield,
} as const

export function Services() {
  return (
    <section id="services-section" aria-label="Services" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink">{servicesTitle}</h2>
          <p className="mt-4 text-body">{servicesSubtitle}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
