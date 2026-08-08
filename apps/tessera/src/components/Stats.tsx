const stats = [
  { value: '25', label: 'Years of Experience' },
  { value: '600', label: 'Happy Clients' },
  { value: '1200', label: 'Finished Projects' },
  { value: '300', label: 'Working Days' },
] as const

export function Stats() {
  return (
    <section
      aria-label="Company stats"
      className="relative bg-cover bg-center py-20 lg:py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/tessera-stats/1600/500)' }}
    >
      <div className="absolute inset-0 bg-brand/90" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-10 text-center text-white lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <p className="font-display text-4xl font-bold lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[2px] text-white/80">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
