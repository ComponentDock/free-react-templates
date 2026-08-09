const stats = [
  { value: 45, label: 'Years of Experienced' },
  { value: 8500, label: 'Project completed' },
  { value: 2342, label: 'Happy Customers' },
  { value: 30, label: 'Award Winning' },
] as const

export function Stats() {
  return (
    <section
      id="stats"
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/torquely-4/1600/500')" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl font-extrabold">{stat.value}</p>
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
