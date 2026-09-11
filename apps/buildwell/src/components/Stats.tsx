import { Clock, Briefcase, Users, Trophy } from 'lucide-react'

const stats = [
  { icon: Clock, value: '20', label: 'Years of Experience' },
  { icon: Briefcase, value: '154', label: 'Projects Completed' },
  { icon: Users, value: '785', label: 'Happy Clients' },
  { icon: Trophy, value: '14', label: 'Awards Won' },
] as const

export function Stats() {
  return (
    <section id="numbers" className="bg-accent py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-3xl font-bold text-brand">{stat.value}</h3>
                <p className="mt-1 text-sm text-brand/80">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
