import { Network, Home, Users, Trophy } from 'lucide-react'

const stats = [
  { icon: Network, value: '800', label: 'Projects Completed' },
  { icon: Home, value: '230', label: 'House Renovations' },
  { icon: Users, value: '1390', label: 'Workers Employed' },
  { icon: Trophy, value: '125', label: 'Awards Won' },
]

export function Stats() {
  return (
    <section className="relative bg-brand py-16">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://picsum.photos/seed/constructo-stats-bg/1600/400"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-white">Our Achievements</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto mb-3 h-10 w-10 text-accent" aria-hidden="true" />
              <p className="mb-1 font-heading text-3xl font-bold text-white">{s.value}</p>
              <p className="text-xs uppercase tracking-wide text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
