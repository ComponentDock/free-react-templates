const stats = [
  { value: '+3500', label: 'Happy Clients' },
  { value: '12', label: 'New Locations' },
  { value: '+175', label: 'Great Employees' },
  { value: '56K', label: 'Instagram Followers' },
] as const

export function Intro() {
  return (
    <section id="about" className="relative bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-sans text-4xl font-bold uppercase tracking-wide">Why Choose Us?</h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/80">
            Beauty &amp; wellness, recreated in React. From precision hair dressing to restorative
            spa treatments, our stylists treat every visit like a masterpiece in the making.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-36 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-8 text-center"
            >
              <dt className="order-2 mt-2 text-sm uppercase tracking-wide text-white/70">
                {stat.label}
              </dt>
              <dd className="font-sans text-4xl font-bold text-rouge-400">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
