import { Building2, Users, Scale, Award } from 'lucide-react'
import { COUNTERS } from '../data'

const ICONS = {
  building: Building2,
  users: Users,
  scale: Scale,
  award: Award,
} as const

/* Counter — 4 stat cards in a row showing key firm metrics with icons. */
export function Counter() {
  return (
    <section className="bg-dark py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {COUNTERS.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <div key={item.label} className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-7 w-7 text-brand" />
                </div>
                <div className="text-3xl font-bold text-white">{item.number.toLocaleString()}</div>
                <div className="mt-1 text-sm text-white/60">{item.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
