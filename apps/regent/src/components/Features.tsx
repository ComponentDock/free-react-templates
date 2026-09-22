import { Waves, ConciergeBell, ShieldCheck, Car, Wind, Wine, WineOff, Plane } from 'lucide-react'
import { FEATURES } from '../data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  waves: Waves,
  'bell-concierge': ConciergeBell,
  'shield-check': ShieldCheck,
  car: Car,
  wind: Wind,
  wine: Wine,
  'wine-off': WineOff,
  plane: Plane,
}

/** Features — 4-column grid, 8 hotel features with lucide-react icons. */
export function Features() {
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-heading text-4xl font-bold text-ink">
          Hotel Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon]
            return (
              <div key={feature.name} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  {Icon && (
                    <Icon
                      data-testid={`feature-icon-${feature.icon}`}
                      className="h-8 w-8 text-brand"
                    />
                  )}
                </div>
                <h3 className="font-heading text-lg font-bold text-ink">{feature.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
