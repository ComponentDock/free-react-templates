const stats = [
  { value: '2000', label: 'Done Works' },
  { value: '300', label: 'Happy Customers' },
  { value: '100', label: 'Coffee' },
  { value: '1000', label: 'Work Hours' },
]

export function Counter() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://picsum.photos/seed/cleanpage-counter/1600/600)`,
        }}
      />
      <div className="absolute inset-0 bg-ink-dark/85" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
              Some
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              Interesting Facts
            </h2>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-display text-4xl font-bold text-brand md:text-5xl">
                    {s.value}
                  </span>
                  <p className="mt-2 font-sans text-sm text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
