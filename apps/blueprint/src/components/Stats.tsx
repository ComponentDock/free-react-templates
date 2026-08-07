import { Award, Layers, Timer } from 'lucide-react'

const stats = [
  {
    value: '1500',
    label: 'Of customers are satisfied with our professional support',
    icon: Award,
  },
  {
    value: '500',
    label: 'Amazing preset options to be mixed and combined',
    icon: Layers,
  },
  {
    value: '1200',
    label: 'Average response time on live chat support channel',
    icon: Timer,
  },
] as const

export function Stats() {
  return (
    <section aria-label="Stats" className="bg-gradient-to-br from-primary-400 to-accent-400">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 text-center sm:px-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white">
              <stat.icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <p className="mt-6 font-display text-5xl font-bold text-white">{stat.value}</p>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
