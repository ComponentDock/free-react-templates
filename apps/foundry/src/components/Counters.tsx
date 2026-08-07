const stats = [
  { value: '120', label: 'Projects' },
  { value: '80', label: 'Employees' },
  { value: '35', label: 'Constructor' },
  { value: '200', label: 'Partners' },
] as const

export function Counters() {
  return (
    <section className="relative bg-coal py-20">
      <img
        src="https://picsum.photos/seed/foundry-counters/1600/600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-coal/60" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl font-bold text-brand">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
