const screenshots = [
  {
    src: 'https://picsum.photos/seed/massive-shot-1/420/760',
    alt: 'Massive app home screen',
  },
  {
    src: 'https://picsum.photos/seed/massive-shot-2/420/760',
    alt: 'Massive app analytics screen',
  },
  {
    src: 'https://picsum.photos/seed/massive-shot-3/420/760',
    alt: 'Massive app chat screen',
  },
  {
    src: 'https://picsum.photos/seed/massive-shot-4/420/760',
    alt: 'Massive app settings screen',
  },
] as const

export function Screenshots() {
  return (
    <section
      id="screenshot"
      aria-label="Screenshots"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            Gallery
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Awesome Screenshot
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
            and emerging niches.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {screenshots.map((shot) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="w-full rounded-2xl border border-gray-100 object-cover shadow-md dark:border-gray-800"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
