const stats = [
  { value: '7000+', label: 'Highly Especialized Employees' },
  { value: '90+', label: 'Countries World Wide' },
  { value: '2900+', label: 'Finished Projects' },
] as const

export function Stats() {
  return (
    <section
      id="about"
      className="border-b border-black/5 bg-paper py-16 dark:border-white/10 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-mono text-sm font-medium uppercase tracking-[3px] text-ink/60 dark:text-white/60">
          Let the number speaks for us.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-display text-5xl font-extrabold text-brand">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink/70 dark:text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
