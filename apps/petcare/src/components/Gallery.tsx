const photos = [
  { seed: 1, alt: 'Golden retriever smiling in the boarding play area' },
  { seed: 2, alt: 'Kitten resting on a cozy clinic blanket' },
  { seed: 3, alt: 'Veterinarian giving a checkup to a pug' },
  { seed: 4, alt: 'Two puppies playing with a ball in the yard' },
  { seed: 5, alt: 'Parrot perched on a stand during a health check' },
  { seed: 6, alt: 'Happy corgi getting a treat after a bath' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-navy dark:text-white">
          Pets Photo Gallery
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light text-muted dark:text-gray-400">
          A peek at the happy moments shared at our clinic.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((photo) => (
            <img
              key={photo.seed}
              src={`https://picsum.photos/seed/petcare-gallery-${photo.seed}/480/360`}
              alt={photo.alt}
              loading="lazy"
              className="h-48 w-full rounded-lg object-cover md:h-64"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
