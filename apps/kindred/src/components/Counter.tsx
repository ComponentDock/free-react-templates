const stats = [
  { value: '705', label: 'Days in Campaign' },
  { value: '809', label: 'Dedicated Donors' },
  { value: '335', label: 'Winning Awards' },
  { value: '35', label: 'Fun Raised' },
] as const

export function Counter() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/kindred-counter/1920/700)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand/70" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl font-bold text-white">{stat.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/85">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
