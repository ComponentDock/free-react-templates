import { Briefcase, Users, Coffee, Calendar } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 750, label: 'Project Complete' },
  { icon: Users, value: 568, label: 'Happy Clients' },
  { icon: Coffee, value: 478, label: 'Cups of coffee' },
  { icon: Calendar, value: 8, label: 'Years experienced' },
]

export function Stats() {
  return (
    <section className="bg-light-bg py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <stat.icon className="mb-3 h-8 w-8 text-primary" aria-hidden="true" />
            <span className="text-3xl font-bold text-ink">{stat.value}</span>
            <span className="text-sm text-smoke">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
