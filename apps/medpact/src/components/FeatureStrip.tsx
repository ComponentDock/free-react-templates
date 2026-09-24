import { Ambulance, CalendarCheck, BadgeCheck, Clock, type LucideIcon } from 'lucide-react'
import { features, type Feature } from '../data'

const iconMap: Record<Feature['icon'], LucideIcon> = {
  ambulance: Ambulance,
  'calendar-check': CalendarCheck,
  'badge-check': BadgeCheck,
  clock: Clock,
}

export function FeatureStrip() {
  return (
    <section className="relative -mt-8 z-10 px-4 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon]
          return (
            <div
              key={feature.title}
              className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Icon aria-hidden="true" className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-heading">{feature.title}</h3>
                <p className="mt-1 text-xs text-muted">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
