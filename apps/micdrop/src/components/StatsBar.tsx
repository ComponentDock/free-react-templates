const STATS = [
  { value: '500+', label: 'Episodes' },
  { value: '2M+', label: 'Downloads' },
  { value: 'Top 50', label: 'Tech Podcast' },
  { value: '4.8', label: 'Rating' },
]

export function StatsBar() {
  return (
    <section className="border-t border-border bg-dark-bg py-8" aria-label="Podcast statistics">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
