const tiles = [
  'https://picsum.photos/seed/gilded-work1/600/600',
  'https://picsum.photos/seed/gilded-work2/600/600',
  'https://picsum.photos/seed/gilded-work3/600/600',
  'https://picsum.photos/seed/gilded-work4/600/600',
  'https://picsum.photos/seed/gilded-work5/600/600',
  'https://picsum.photos/seed/gilded-work6/600/600',
] as const

export function Work() {
  return (
    <section id="portfolio" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            A glimpse of the hairstyles and transformations our stylists craft every day.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tiles.map((src, index) => (
            <li key={src} className="group relative overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Hairstyle ${index + 1}`}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-semibold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
                Hairstyle
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
