import { Users, TrendingUp, Smile, Briefcase } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface CounterItem {
  icon: LucideIcon
  value: string
  label: string
}

const counters: CounterItem[] = [
  { icon: Users, value: '200+', label: 'Team Members' },
  { icon: TrendingUp, value: '97%', label: 'Business Success' },
  { icon: Smile, value: '5628', label: 'Happy Client' },
  { icon: Briefcase, value: '5637', label: 'Business Done' },
]

export function Counters() {
  return (
    <section className="relative py-24">
      {/* Parallax background with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/stratagem-counter/1920/600)',
        }}
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {counters.map((counter) => (
            <div key={counter.label} className="text-center">
              <counter.icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
              <p className="mt-4 text-4xl font-light text-white">{counter.value}</p>
              <p className="mt-2 text-sm text-white/80">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
