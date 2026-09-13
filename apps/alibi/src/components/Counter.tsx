const stats = [
  { value: '18', label: 'Years Experience' },
  { value: '450', label: 'Case Won' },
  { value: '56', label: 'Practice Areas' },
  { value: '1,000+', label: 'Happy Clients' },
]

export function Counter() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/alibi-counter/1600/600"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand/85" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
