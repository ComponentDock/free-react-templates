import { Gamepad2, Trophy, Clock, Laptop } from 'lucide-react'

const stats = [
  { icon: Gamepad2, value: '48', label: 'VIDEO GAMES' },
  { icon: Trophy, value: '7', label: 'AWARDS WON' },
  { icon: Clock, value: '23K', label: 'Pictures taken' },
  { icon: Laptop, value: '19', label: 'Video tutorials' },
]

export function Milestones() {
  return (
    <section className="bg-white py-[130px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <Icon size={40} className="mx-auto mb-4 text-beacon-accent" aria-hidden="true" />
                <h2 className="mb-2 text-4xl font-bold text-beacon-heading">{stat.value}</h2>
                <p className="text-sm uppercase">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
