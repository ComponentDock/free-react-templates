import { Briefcase, Heart, Coffee, Calendar } from 'lucide-react'

const STATS = [
  { icon: Briefcase, number: 750, label: 'Project Complete' },
  { icon: Heart, number: 568, label: 'Happy Clients' },
  { icon: Coffee, number: 478, label: 'Cups of Coffee' },
  { icon: Calendar, number: 10, label: 'Years Experienced' },
]

export function Counter() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-10 w-10 text-brand-500" />
              <div className="mb-1 text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
