const stats = [
  { value: 2560, label: 'Happy Customers' },
  { value: 60, label: 'Treatments' },
  { value: 50, label: 'Years of Experience' },
  { value: 100, label: 'Lesson Conducted' },
] as const

export function Counter() {
  return (
    <section
      id="counter"
      className="relative overflow-hidden bg-night py-16 transition-colors dark:bg-gray-950"
    >
      <img
        src="https://picsum.photos/seed/serenity-counter/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl text-brand sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
