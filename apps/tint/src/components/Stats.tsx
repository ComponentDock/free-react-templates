import { Briefcase, Users, Award, Coffee } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '258+', label: 'Projects Done' },
  { icon: Users, value: '942+', label: 'Happy Clients' },
  { icon: Award, value: '958+', label: 'Real Professionals' },
  { icon: Coffee, value: '2000+', label: 'Cups of Coffee' },
]

export function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-gold-500">
            About Our Company
          </span>
          <h2 className="text-3xl font-bold text-navy-800 font-[family-name:var(--font-condensed)] md:text-4xl">
            Some statistics that we want
            <br />
            to show our viewers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/10 text-gold-500">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 font-[family-name:var(--font-condensed)]">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
