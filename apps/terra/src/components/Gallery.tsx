const images = [
  { src: 'https://picsum.photos/seed/terra-gallery-1/600/600', alt: 'Beauty & Massage' },
  { src: 'https://picsum.photos/seed/terra-gallery-2/600/600', alt: 'Beauty & Massage' },
  { src: 'https://picsum.photos/seed/terra-gallery-3/600/600', alt: 'Beauty & Massage' },
  { src: 'https://picsum.photos/seed/terra-gallery-4/600/600', alt: 'Beauty & Massage' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-brand-soft py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Gallery
        </p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink sm:text-4xl dark:text-white">
          Beauty &amp; Massage
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <figure key={image.src} className="group relative overflow-hidden rounded-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-medium text-white">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
