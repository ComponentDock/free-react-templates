const photos = [
  'https://picsum.photos/seed/azurepeak-gallery-1/600/800',
  'https://picsum.photos/seed/azurepeak-gallery-2/600/600',
  'https://picsum.photos/seed/azurepeak-gallery-3/600/800',
  'https://picsum.photos/seed/azurepeak-gallery-4/600/600',
  'https://picsum.photos/seed/azurepeak-gallery-5/600/800',
  'https://picsum.photos/seed/azurepeak-gallery-6/600/600',
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Our Resort
          </p>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            A Glimpse of Paradise
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Gallery photo ${index + 1}`}
              className="aspect-[3/4] w-full rounded-xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
