interface StatItem {
  value: string
  label: string
}

const STATS: StatItem[] = [
  { value: '2500', label: 'Total Students' },
  { value: '14k', label: 'Graduates' },
  { value: '129', label: 'Courses' },
  { value: '1490', label: 'Events' },
]

export function FunFacts() {
  return (
    <section className="relative overflow-hidden bg-brand py-16">
      {/* Background image with overlay */}
      <img
        src="https://picsum.photos/seed/lectio-stats/1920/400"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-brand/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
