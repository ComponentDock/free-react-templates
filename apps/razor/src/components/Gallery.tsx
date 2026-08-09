const gallery = [
  { seed: 'razor-gallery-1', alt: 'Barber shop gallery photo 1' },
  { seed: 'razor-gallery-2', alt: 'Barber shop gallery photo 2' },
  { seed: 'razor-gallery-3', alt: 'Barber shop gallery photo 3' },
  { seed: 'razor-gallery-4', alt: 'Barber shop gallery photo 4' },
  { seed: 'razor-gallery-5', alt: 'Barber shop gallery photo 5' },
  { seed: 'razor-gallery-6', alt: 'Barber shop gallery photo 6' },
] as const

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-ink dark:text-white lg:text-5xl">
            Photos of Our Events
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo) => (
            <figure key={photo.seed} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${photo.seed}/800/500`}
                alt={photo.alt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
