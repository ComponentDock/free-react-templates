const stats = [
  { value: 18, label: 'Years of Experienced' },
  { value: 351, label: 'Happy Clients' },
  { value: 564, label: 'Finished Projects' },
  { value: 300, label: 'Working Days' },
] as const

export function Counter() {
  return (
    <section className="relative py-20">
      <img
        src="https://picsum.photos/seed/archway-counter/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div className="lg:w-1/3">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-white/70">
              Some
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Interesting Facts</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:w-2/3 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-4xl font-bold text-brand">{stat.value}</span>
                <span className="mt-2 block text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
