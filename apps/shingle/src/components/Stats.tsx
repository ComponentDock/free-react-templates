import { Calendar, Briefcase, Users, BarChart3 } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '45', label: 'Years of Experience' },
  { icon: Briefcase, value: '8,500', label: 'Projects Completed' },
  { icon: Users, value: '2,342', label: 'Happy Clients' },
  { icon: BarChart3, value: '30', label: 'Business Partners' },
] as const

export function Stats() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <Icon className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
                <p className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-mist">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
