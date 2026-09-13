const stats = [
  { value: '4000+', label: 'Happy customers served every month' },
  { value: '300+', label: 'Professional laundry experts on staff' },
  { value: '95%', label: 'Customer satisfaction rate worldwide' },
] as const

export function Stats() {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Fun Fact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Company achievement
          </h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <span className="font-display text-4xl font-bold text-brand sm:text-5xl">
                {stat.value}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
