const stats = [
  { value: '25', label: 'Years of Experienced' },
  { value: '120', label: 'Project Done' },
  { value: '35', label: 'Licensed Architect' },
  { value: '800', label: 'Happy Customers' },
] as const

export function Stats() {
  return (
    <section className="relative bg-coal py-16">
      <img
        src="https://picsum.photos/seed/beamline-stats/1600/400"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-extrabold text-brand">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/85">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
