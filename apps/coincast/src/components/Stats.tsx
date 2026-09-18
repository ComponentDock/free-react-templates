const stats = [
  { value: '1,454', label: 'Happy Clients' },
  { value: '759', label: 'Projects Completed' },
  { value: '1,250', label: 'Awards Won' },
  { value: '2,391', label: 'Cups of Coffee' },
]

export function Stats() {
  return (
    <section className="bg-ink py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        {/* Image */}
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/coincast-stats/600/400"
            alt="Coincast statistics overview"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-brand lg:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
