const metrics = [
  { value: '0 M+', label: 'Members' },
  { value: '0 K+', label: 'Likes' },
  { value: '0 K+', label: 'Share' },
] as const

export function Achievements() {
  return (
    <section className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Our Achievements
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-display text-5xl font-bold text-primary-500">{metric.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
