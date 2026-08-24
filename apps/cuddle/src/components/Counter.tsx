import { Users, Heart, Gift, Award } from 'lucide-react'

const stats = [
  { icon: Gift, value: '$60M', label: 'Funds Raised' },
  { icon: Users, value: '9200', label: 'Happy Donors' },
  { icon: Heart, value: '5800', label: 'Completed Projects' },
  { icon: Award, value: '2750', label: 'Volunteers' },
] as const

export function Counter() {
  return (
    <section id="counter" className="relative py-20 sm:py-28">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/cuddle-counter/1920/600"
          alt="Charity event background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-teal/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/20 mx-auto text-brand">
                <stat.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
