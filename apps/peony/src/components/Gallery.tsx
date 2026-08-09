const tiles = [
  { label: 'Makeup', image: 'https://picsum.photos/seed/peony-gallery-1/600/600' },
  { label: 'Model', image: 'https://picsum.photos/seed/peony-gallery-2/600/600' },
  { label: 'Makeup', image: 'https://picsum.photos/seed/peony-gallery-3/600/600' },
  { label: 'Makeup', image: 'https://picsum.photos/seed/peony-gallery-4/600/600' },
  { label: 'Model', image: 'https://picsum.photos/seed/peony-gallery-5/600/600' },
  { label: 'Makeup', image: 'https://picsum.photos/seed/peony-gallery-6/600/600' },
  { label: 'Model', image: 'https://picsum.photos/seed/peony-gallery-7/600/600' },
  { label: 'Makeup', image: 'https://picsum.photos/seed/peony-gallery-8/600/600' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Working on a Salon
          </h2>
          <p className="mt-4 text-mist dark:text-white/60">
            Separated they live in. A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tiles.map((tile, index) => (
            <li
              key={tile.image}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={tile.image}
                alt={`${tile.label} — salon work ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-plum/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {tile.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
