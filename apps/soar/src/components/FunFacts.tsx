const stats = [
  { value: '10,000+', label: 'CMS Installation' },
  { value: '200+', label: 'Awards Won' },
  { value: '75,000+', label: 'Registered Domains' },
  { value: '100,000+', label: 'Satisfied Customers' },
] as const

export function FunFacts() {
  return (
    <section
      id="fun-facts"
      aria-label="Fun facts"
      className="bg-gradient-to-br from-primary-400 to-accent-500 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">Numbers</p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            Some fun facts
          </h2>
          <p className="mt-4 text-white/85">More than 100,000 websites hosted</p>
        </div>
        <dl className="mt-12 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-2 text-white/80">{stat.label}</dt>
              <dd className="order-1 text-4xl font-medium text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
