const tiles = [
  { seed: 'amber-gallery-1', alt: 'Classic scissor cut in progress' },
  { seed: 'amber-gallery-2', alt: 'Hot towel shave preparation' },
  { seed: 'amber-gallery-3', alt: 'Styling a clean fade' },
  { seed: 'amber-gallery-4', alt: 'Barber tools on the counter' },
  { seed: 'amber-gallery-5', alt: 'Beard trim detail' },
  { seed: 'amber-gallery-6', alt: 'Finished cut portrait' },
] as const

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Work Showcase
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Gallery
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile) => (
            <img
              key={tile.seed}
              src={`https://picsum.photos/seed/${tile.seed}/700/500`}
              alt={tile.alt}
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover shadow-sm transition-shadow hover:shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
