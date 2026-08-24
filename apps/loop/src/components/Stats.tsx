import { Briefcase, MousePointer2, Globe, Clock } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 230, label: 'Projects' },
  { icon: MousePointer2, value: 229, label: 'Happy Clients' },
  { icon: Globe, value: 8, label: 'Leadership' },
  { icon: Clock, value: 15, label: 'Years Experience' },
]

export function Stats() {
  return (
    <section id="stats" className="bg-navy-50 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-navy-900">Stats</h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-10 w-10 text-coral-400" />
              <div className="mb-1 text-4xl font-bold text-navy-900">{stat.value}</div>
              <div className="text-sm font-medium uppercase tracking-wide text-navy-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
