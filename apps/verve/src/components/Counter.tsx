const stats = [
  { value: '12,000+', label: 'Customers are satisfied with our professional support' },
  { value: '60+', label: 'Amazing preset options to be mixed and combined' },
  { value: '24/7', label: 'Average response time on live chat support channel' },
] as const

export function Counter() {
  return (
    <section
      id="achievements"
      aria-label="Our achievements"
      className="bg-accent-500 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">Numbers</p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            Our achievements
          </h2>
        </div>
        <dl className="mt-12 grid gap-10 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-2 text-white/70">{stat.label}</dt>
              <dd className="order-1 text-4xl font-medium text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
