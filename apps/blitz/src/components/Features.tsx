const leftFeatures = [
  {
    title: 'Responsive',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus.',
  },
  {
    title: 'Clean code',
    text: 'Nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
  },
] as const

const rightFeatures = [
  {
    title: 'Retina ready',
    text: 'Nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
  },
  {
    title: 'Great team',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus.',
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-display text-3xl font-bold text-brand">
          Modern features
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-8 text-right">
            {leftFeatures.map((f) => (
              <div key={f.title}>
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{f.text}</p>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="flex flex-col items-center gap-6">
            <img
              src="https://picsum.photos/seed/blitz-features/400/400"
              alt="Features showcase"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
            <a
              href="#cta"
              className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-accent/90"
            >
              Discover More
            </a>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {rightFeatures.map((f) => (
              <div key={f.title}>
                <h3 className="mb-2 font-display text-lg font-semibold text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{f.text}</p>
              </div>
            ))}
            <a
              href="#cta"
              className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-accent/90"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
