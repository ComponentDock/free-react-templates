import { Waves, HeartPulse, UtensilsCrossed, Dumbbell, Wifi, Plane } from 'lucide-react'
import { AMENITIES } from '../data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  waves: Waves,
  'heart-pulse': HeartPulse,
  utensils: UtensilsCrossed,
  dumbbell: Dumbbell,
  wifi: Wifi,
  plane: Plane,
}

export function Amenities() {
  return (
    <section id="amenities" className="bg-dark py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-white">Hotel Amenities</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">
          Everything you need for a comfortable and memorable stay.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((amenity) => {
            const Icon = ICON_MAP[amenity.icon]
            return (
              <div key={amenity.name} className="flex items-start gap-4 rounded-lg bg-white/5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/20">
                  {Icon && <Icon className="h-6 w-6 text-brand" />}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">{amenity.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{amenity.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
