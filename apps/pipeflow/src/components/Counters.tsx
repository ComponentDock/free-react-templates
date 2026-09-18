import { Smile, Briefcase, Coffee, Ticket } from 'lucide-react'

const stats = [
  { icon: Smile, value: 2536, label: 'Happy Clients' },
  { icon: Briefcase, value: 6784, label: 'Total Projects' },
  { icon: Coffee, value: 1059, label: 'Cups Coffee' },
  { icon: Ticket, value: 12239, label: 'Tickets Submitted' },
]

export function Counters() {
  return (
    <section className="bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <Icon className="mx-auto mb-4 h-10 w-10 text-brand-400" />
                <p className="mb-2 text-4xl font-bold text-white lg:text-5xl">
                  {stat.value.toLocaleString()}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
