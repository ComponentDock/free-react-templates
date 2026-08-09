import { Car, Percent, Smile, Users } from 'lucide-react'

const stats = [
  { value: 20, suffix: '', label: 'Expert Mechanics', icon: Users },
  { value: 3200, suffix: '+', label: 'Happy Customers', icon: Smile },
  { value: 98, suffix: '%', label: 'Repair Success', icon: Car },
  { value: 100, suffix: '%', label: 'Satisfaction Rate', icon: Percent },
] as const

export function Stats() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/fixly-stats/1920/600')" }}
    >
      <div className="absolute inset-0 bg-coal/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Our track record
          </span>
          <h2 className="mt-2 font-display text-3xl font-black text-white sm:text-4xl">
            Technical Statistics
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <stat.icon className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-4 font-display text-4xl font-black text-white">
                {stat.value.toLocaleString('en-US')}
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
