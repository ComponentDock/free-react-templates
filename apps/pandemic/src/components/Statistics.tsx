import { Activity, Skull, Heart } from 'lucide-react'

const stats = [
  { icon: Activity, number: '14,112,077', label: 'Total Cases', color: 'text-danger' },
  { icon: Skull, number: '595,685', label: 'Deaths', color: 'text-white' },
  { icon: Heart, number: '8,397,665', label: 'Recovered', color: 'text-success' },
]

export function Statistics() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl bg-gray-800 p-8 text-center"
            >
              <stat.icon className={`mb-4 h-10 w-10 ${stat.color}`} />
              <span className="text-3xl font-black text-white">{stat.number}</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
