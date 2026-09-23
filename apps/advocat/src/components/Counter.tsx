import { Scale, Briefcase, Smile, Award } from 'lucide-react'
import { stats } from '../data'

const iconMap = { Scale, Briefcase, Smile, Award }

/** Dark stats counter section with 4 metrics. */
export function Counter() {
  return (
    <section className="bg-ink py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon]
          return (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <Icon className="h-6 w-6 text-brand" />
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-brand">
                  {stat.value.toLocaleString()}
                </p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
