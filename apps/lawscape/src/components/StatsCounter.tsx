const stats = [
  { value: '35', label: 'Dedicated Lawyers' },
  { value: '1526', label: 'Successful Cases' },
  { value: '720', label: 'Satisfied Clients' },
  { value: '680', label: 'Personal Cases' },
] as const

export function StatsCounter() {
  return (
    <section aria-label="Statistics" className="relative z-10 -mt-10 pb-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded bg-white p-5 text-center shadow-lg">
            <h3 className="relative pb-1 text-3xl font-bold text-ink">
              {stat.value}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-3/5 -translate-x-1/2 bg-primary-500" />
            </h3>
            <h4 className="mt-4 text-lg font-bold text-ink">{stat.label}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}
