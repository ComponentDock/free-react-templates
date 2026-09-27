import { Home, Users, Clock } from 'lucide-react'

const stats = [
  { value: '200+', label: 'Properties for sale', icon: Home },
  { value: '300', label: 'Happy Clients', icon: Users },
  { value: '15', label: 'Years Experience', icon: Clock },
]

export function Counter() {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-3 sm:px-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="flex flex-col items-center">
              <Icon className="mb-3 h-8 w-8 text-primary-400" aria-hidden="true" />
              <span className="font-display text-4xl font-bold text-primary-400">{stat.value}</span>
              <span className="mt-2 text-sm text-white/80">{stat.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
