const tiles = [
  { seed: 'taper-gallery-1', alt: 'Barber styling a client haircut' },
  { seed: 'taper-gallery-2', alt: 'Beard trim with a straight razor' },
  { seed: 'taper-gallery-3', alt: 'Barber tools laid out on a counter' },
  { seed: 'taper-gallery-4', alt: 'Fresh fade finished in the chair' },
] as const

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            our image gellary
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            some images from our barber shop
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <figure key={tile.seed} className="overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${tile.seed}/600/700`}
                alt={tile.alt}
                loading="lazy"
                className="aspect-[6/7] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
