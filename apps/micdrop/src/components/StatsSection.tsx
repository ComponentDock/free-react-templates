const STATS = [
  { value: '200+', label: 'Episodes Published' },
  { value: '1M+', label: 'Total Downloads' },
  { value: '50+', label: 'Countries Reached' },
  { value: '4.9', label: 'Average Rating' },
]

export function StatsSection() {
  return (
    <section className="bg-light-bg py-16" aria-label="Showcase statistics">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
