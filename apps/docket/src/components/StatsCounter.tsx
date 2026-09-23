interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '90+', label: 'Happy Clients' },
  { value: '45+', label: 'Court Won' },
  { value: '19+', label: 'Awards' },
  { value: '26+', label: 'Practice Years' },
]

export function StatsCounter() {
  return (
    <section aria-label="Statistics" className="relative overflow-hidden py-20">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/docket-stats/1920/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="mb-2 block text-4xl font-bold text-white">{stat.value}</span>
            <span className="text-sm text-[#b2b2b8]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
