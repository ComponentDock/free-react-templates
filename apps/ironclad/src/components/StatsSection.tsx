import { Building, Users } from 'lucide-react'

const STATS = [
  { icon: Building, value: '48,000', label: 'Project Completed', bgColor: 'bg-brand-400' },
  { icon: Users, value: '54,900', label: 'Happy Customers', bgColor: 'bg-dark-light' },
]

export function StatsSection() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/seed/ironclad-stats/1920/800')" }}
      />
      <div className="absolute inset-0 bg-dark/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="bg-dark/90 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-brand-400 font-medium text-sm uppercase tracking-wide">
              Ironclad A Construction Company
            </span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">
              Best Provider for Industrial Services
            </h2>
            <h4 className="text-gray-300 mb-3">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </div>
          <div className="flex flex-col">
            {STATS.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className={`${stat.bgColor} p-8 flex items-center gap-5`}>
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <span className="text-white/80 text-sm">{stat.label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
