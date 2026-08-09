const stats = [
  { value: '705', label: 'Creative Makeup' },
  { value: '1000', label: 'Number of Awards' },
  { value: '3000', label: 'Happy Clients' },
  { value: '900', label: 'Piercing Done' },
] as const

export function Counter() {
  return (
    <section aria-label="Salon statistics" className="relative overflow-hidden bg-ink py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/locks-counter/1600/500"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl text-brand">{stat.value}</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
