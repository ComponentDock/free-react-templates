const stats = [
  { value: 320, label: 'Happy Customer' },
  { value: 120, label: 'Projects' },
  { value: 25, label: 'Years of Experience' },
  { value: 45, label: 'Awards' },
] as const

export function Counter() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <img
        src="https://picsum.photos/seed/forno-11/1920/600"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-5xl font-semibold text-primary-500">{stat.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
