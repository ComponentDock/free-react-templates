import { Gamepad2, Trophy, Clock, Monitor } from 'lucide-react'

const stats = [
  { icon: Gamepad2, value: '48', label: 'Video Games' },
  { icon: Trophy, value: '7', label: 'Awards Won' },
  { icon: Clock, value: '23K', label: 'Pictures Taken' },
  { icon: Monitor, value: '19', label: 'Video Tutorials' },
]

export default function Milestones() {
  return (
    <section className="bg-ink-700 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="text-center">
              <Icon className="mx-auto mb-4 text-3xl text-white/60" size={36} />
              <h3 className="mb-1 text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-sm uppercase tracking-wider text-white/50">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
