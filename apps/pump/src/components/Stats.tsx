import { Award, Clock, HeartPulse, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Stat {
  value: string
  label: string
  icon: LucideIcon
}

const stats: Stat[] = [
  { value: '800', label: 'Happy Customers', icon: Users },
  { value: '350', label: 'Perfect Bodies', icon: HeartPulse },
  { value: '2,500', label: 'Working Hours', icon: Clock },
  { value: '500', label: 'Success Stories', icon: Award },
] as const

export function Stats() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/pump-stats/1600/500)' }}
    >
      <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 text-center lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <stat.icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
            <p className="mt-4 font-display text-4xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
