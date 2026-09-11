import { Building2, Users, HardHat, Handshake } from 'lucide-react'

const stats = [
  { icon: Building2, value: '1,539', label: 'Projects' },
  { icon: Users, value: '3,653', label: 'Employees' },
  { icon: HardHat, value: '5,987', label: 'Constructors' },
  { icon: Handshake, value: '3,999', label: 'Partners' },
] as const

export function Counters() {
  return (
    <section
      aria-label="Statistics"
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sitecraft-counter/1920/600)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-20 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
            <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
