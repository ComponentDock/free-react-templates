const points = [
  {
    title: 'Powerful Performance',
    blurb:
      'Every page is built to load fast: optimized images, lean components, and zero unnecessary JavaScript on the critical path.',
  },
  {
    title: 'Light & Dark Color Schemes',
    blurb:
      'Aurora ships with both palettes out of the box — flip the toggle and every section adapts automatically.',
  },
]

export function Performance() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-900">
            Built to Perform
          </h2>
          {points.map((point) => (
            <div key={point.title} className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{point.blurb}</p>
            </div>
          ))}
        </div>
        <img
          src="https://picsum.photos/seed/aurora-performance/720/520"
          alt="Aurora performance and themes"
          className="aspect-[7/5] w-full rounded-2xl object-cover"
          loading="lazy"
        />
      </div>
    </section>
  )
}
