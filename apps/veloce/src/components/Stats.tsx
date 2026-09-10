import { Briefcase, CheckCircle, Users, Award } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 560, label: 'All Projects', suffix: '+' },
  { icon: CheckCircle, value: 560, label: 'Projects Completed', suffix: '+' },
  { icon: Users, value: 560, label: 'Happy Customers', suffix: '+' },
  { icon: Award, value: 560, label: 'Awards Won', suffix: '+' },
] as const

export function Stats() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(37,40,44,0.88), rgba(37,40,44,0.88)), url(https://picsum.photos/seed/veloce-stat/1600/600)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white">About Our Statistics</h2>
          <p className="mt-3 text-white/70">Numbers that speak for our commitment to excellence.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <Icon className="mx-auto mb-3 h-10 w-10 text-primary-400" aria-hidden="true" />
                <div className="font-display text-4xl font-bold text-white">
                  {stat.value}
                  <span className="text-primary-400">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
