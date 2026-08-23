const photos = [
  'https://picsum.photos/seed/aurora-gallery-1/600/800',
  'https://picsum.photos/seed/aurora-gallery-2/600/600',
  'https://picsum.photos/seed/aurora-gallery-3/600/800',
  'https://picsum.photos/seed/aurora-gallery-4/600/600',
  'https://picsum.photos/seed/aurora-gallery-5/600/800',
  'https://picsum.photos/seed/aurora-gallery-6/600/600',
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          Lookbook
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-gray-600">
          A snapshot of the season — shot on location, styled for real life.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Lookbook photo ${index + 1}`}
              className="aspect-[3/4] w-full rounded-xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
