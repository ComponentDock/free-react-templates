import { Users, Briefcase, Award, UserCheck } from 'lucide-react'

const STATS = [
  { icon: Users, value: '50+', label: 'Years' },
  { icon: Briefcase, value: '8,500+', label: 'Cases' },
  { icon: Award, value: '20', label: 'Awards' },
  { icon: UserCheck, value: '50+', label: 'Experts' },
]

export function StatsCounter() {
  return (
    <section className="bg-dark py-20" aria-label="Stats">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">
            Our Track Record
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">By The Numbers</h2>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <Icon size={32} className="mx-auto mb-3 text-brand" aria-hidden="true" />
                <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-white/70">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
