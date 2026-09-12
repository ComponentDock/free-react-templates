import { Users, Map, Globe, Activity } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers' },
  { icon: Map, value: '1,000+', label: 'Tours Completed' },
  { icon: Globe, value: '200+', label: 'Destinations' },
  { icon: Activity, value: '50,000+', label: 'Activities' },
]

export function Stats() {
  return (
    <section id="about" className="relative overflow-hidden bg-ocean-900 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/trekly-stats-bg/1600/600')",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean-300">
            Why Trekly
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">Get Best Travel Deals</h2>
          <p className="mt-3 text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-ocean-600 text-white">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
