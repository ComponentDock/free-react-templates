const images = [
  { src: 'https://picsum.photos/seed/stallion-g1/400/300', alt: 'Gym training session' },
  { src: 'https://picsum.photos/seed/stallion-g2/400/300', alt: 'Weightlifting' },
  { src: 'https://picsum.photos/seed/stallion-g3/400/300', alt: 'Group fitness class' },
  { src: 'https://picsum.photos/seed/stallion-g4/400/300', alt: 'Cardio equipment' },
  { src: 'https://picsum.photos/seed/stallion-g5/400/300', alt: 'Personal training' },
  { src: 'https://picsum.photos/seed/stallion-g6/400/300', alt: 'Yoga studio' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Image Gallery that we like to share
          </h2>
          <p className="mt-4 text-muted">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img) => (
            <div key={img.src} className="group relative overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
