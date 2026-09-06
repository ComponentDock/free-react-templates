const images = [
  { src: 'https://picsum.photos/seed/dine-food-1/600/400', alt: 'Food dish 1' },
  { src: 'https://picsum.photos/seed/dine-food-2/600/400', alt: 'Food dish 2' },
  { src: 'https://picsum.photos/seed/dine-food-3/600/400', alt: 'Food dish 3' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-gray-900">
          Gallery
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {images.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className="w-full rounded-xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
