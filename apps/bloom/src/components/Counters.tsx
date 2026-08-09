const stats = [
  { label: 'Makeup Over Done', value: '1200' },
  { label: 'Happy Client', value: '850' },
  { label: 'Procedures', value: '3400' },
  { label: 'Skin Treatments', value: '2100' },
] as const

export function Counters() {
  return (
    <section
      aria-label="Statistics"
      className="relative overflow-hidden bg-gradient-to-r from-sky to-brand py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
