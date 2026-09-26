import { Briefcase, Users, Coffee, Calendar } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: 750, label: 'Project Complete' },
  { icon: Users, value: 568, label: 'Happy Clients' },
  { icon: Coffee, value: 478, label: 'Cups of coffee' },
  { icon: Calendar, value: 780, label: 'Years experienced' },
]

export default function CounterStats() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <stat.icon size={28} />
              </div>
              <div>
                <span className="text-3xl font-bold text-heading block">{stat.value}</span>
                <span className="text-body text-sm">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
