const images = [
  { src: 'https://picsum.photos/seed/eddy-gallery-1/600/400', alt: 'Resort pool view' },
  { src: 'https://picsum.photos/seed/eddy-gallery-2/600/400', alt: 'Ocean sunset' },
  { src: 'https://picsum.photos/seed/eddy-gallery-3/600/400', alt: 'Beach lounge area' },
  { src: 'https://picsum.photos/seed/eddy-gallery-4/600/400', alt: 'Resort room interior' },
] as const

export function Gallery() {
  return (
    <section id="gallery" aria-label="Gallery" className="bg-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-charcoal">Our Gallery</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Take a glimpse of our beautiful resort and its stunning surroundings.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
