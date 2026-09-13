import { Award, Users, Smile, Trophy } from 'lucide-react'

const stats = [
  { icon: Award, value: '50+', label: 'Years Of Experience' },
  { icon: Users, value: '1254+', label: 'Satisfied Clients' },
  { icon: Smile, value: '2000+', label: 'Happy Customers' },
  { icon: Trophy, value: '42+', label: 'Awards & Certificates' },
] as const

export function Counter() {
  return (
    <section className="bg-accent-blue py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon className="mx-auto h-8 w-8 text-white/80" aria-hidden="true" />
            <p className="mt-3 text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
