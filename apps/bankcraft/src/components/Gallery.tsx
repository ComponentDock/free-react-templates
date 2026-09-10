const images = Array.from({ length: 6 }, (_, i) => ({
  src: `https://picsum.photos/seed/bankcraft-gallery-${i + 1}/400/300`,
  alt: `Gallery image ${i + 1}`,
}))

export function Gallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Our Gallery</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Take a look at our offices and events that showcase our commitment to excellence.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <div key={img.alt} className="group overflow-hidden rounded-xl">
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover transition group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
