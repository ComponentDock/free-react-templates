const stats = [
  { value: 45, label: 'Years of Experience' },
  { value: 8500, label: 'Projects Completed' },
  { value: 30, label: 'Qualified Staff' },
  { value: 2342, label: 'Happy Clients' },
] as const

export function Counter() {
  return (
    <section
      id="stats"
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/fixcraft-4/1600/500')" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl font-extrabold">{stat.value}+</p>
              <p className="mt-2 font-semibold uppercase tracking-wide text-white/85">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
