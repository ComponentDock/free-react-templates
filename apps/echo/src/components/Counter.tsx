const stats = [
  { label: 'Clients', value: 420 },
  { label: 'Project done', value: 890 },
  { label: 'Cups of coffee', value: 1000 },
]

export function Counter() {
  return (
    <section className="bg-surface-dark py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">I love to share my achievements</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-sm uppercase tracking-wider text-white/60">
                {stat.label}
              </span>
              <span className="mt-2 block text-5xl font-bold text-brand">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
