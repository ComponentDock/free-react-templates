export function Gallery() {
  const images = Array.from({ length: 6 }, (_, i) => ({
    src: `https://picsum.photos/seed/cabspot-g${i + 1}/600/400`,
    alt: `CabSpot gallery image ${i + 1}`,
  }))

  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Image Gallery
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="group relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-taxi/0 transition-colors duration-300 group-hover:bg-taxi/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
