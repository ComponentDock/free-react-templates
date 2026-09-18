const images = Array.from({ length: 8 }, (_, i) => ({
  src: `https://picsum.photos/seed/soulflow-gallery${i + 1}/600/400`,
  alt: `Yoga gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Our Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <a
              key={img.alt}
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
