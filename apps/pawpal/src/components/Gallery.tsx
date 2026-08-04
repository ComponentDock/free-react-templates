const images = [
  {
    src: 'https://picsum.photos/seed/pawpal-1/600/600',
    alt: 'Happy golden retriever after grooming',
  },
  { src: 'https://picsum.photos/seed/pawpal-2/600/600', alt: 'Dogs playing in daycare' },
  { src: 'https://picsum.photos/seed/pawpal-3/600/600', alt: 'Dalmatian portrait' },
  { src: 'https://picsum.photos/seed/pawpal-4/600/600', alt: 'Cat being groomed' },
  { src: 'https://picsum.photos/seed/pawpal-5/600/600', alt: 'Puppy enjoying a bath' },
  {
    src: 'https://picsum.photos/seed/pawpal-6/600/600',
    alt: 'Pet relaxing in a cozy boarding suite',
  },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Our happy clients
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Happy Pets Gallery
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-64 w-full rounded-3xl object-cover shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
