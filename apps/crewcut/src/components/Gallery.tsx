const gallery = [
  { seed: 'crewcut-gallery-1', alt: 'Barber shop gallery photo 1' },
  { seed: 'crewcut-gallery-2', alt: 'Barber shop gallery photo 2' },
  { seed: 'crewcut-gallery-3', alt: 'Barber shop gallery photo 3' },
  { seed: 'crewcut-gallery-4', alt: 'Barber shop gallery photo 4' },
  { seed: 'crewcut-gallery-5', alt: 'Barber shop gallery photo 5' },
  { seed: 'crewcut-gallery-6', alt: 'Barber shop gallery photo 6' },
] as const

export function Gallery() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {gallery.map((photo) => (
          <figure key={photo.seed} className="group relative overflow-hidden rounded-xl">
            <img
              src={`https://picsum.photos/seed/${photo.seed}/800/500`}
              alt={photo.alt}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 flex items-end justify-center bg-black/55 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
                Upper Cutting
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
