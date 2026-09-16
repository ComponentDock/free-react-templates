import { Building2, Users, Award } from 'lucide-react'

const stats = [
  { icon: Building2, value: '34', label: 'Projects Completed' },
  { icon: Users, value: '76', label: 'Happy Clients' },
  { icon: Award, value: '08', label: 'Awards Won' },
] as const

export function Stats() {
  return (
    <section aria-label="Statistics" className="relative overflow-hidden py-16 sm:py-20">
      <img
        src="https://picsum.photos/seed/hardhat-stats/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-deep/85" />
      <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <Icon className="mb-3 h-10 w-10 text-brand" aria-hidden="true" />
              <span className="font-display text-5xl font-bold text-white">{stat.value}</span>
              <span className="mt-1 text-sm text-white/70">{stat.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
