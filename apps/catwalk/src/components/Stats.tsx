const stats = [
  { label: 'Models', value: '1,200' },
  { label: 'Agency', value: '60' },
  { label: 'Awards', value: '45' },
  { label: 'Events', value: '32' },
] as const

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <img
        src="https://picsum.photos/seed/catwalk-stats/1600/500"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 text-center sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-white lg:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm font-light uppercase tracking-widest text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
