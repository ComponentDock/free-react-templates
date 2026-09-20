const galleryImages = [
  { seed: 'tribune-gallery-1', alt: 'Conference venue' },
  { seed: 'tribune-gallery-2', alt: 'Panel discussion' },
  { seed: 'tribune-gallery-3', alt: 'Networking event' },
  { seed: 'tribune-gallery-4', alt: 'Workshop session' },
]

export function Gallery() {
  return (
    <section className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Conference Gallery</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((img) => (
            <a
              key={img.seed}
              href={`https://picsum.photos/seed/${img.seed}/800/600`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg"
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
