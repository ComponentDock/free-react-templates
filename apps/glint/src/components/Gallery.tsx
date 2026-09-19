const images = [
  { src: 'https://picsum.photos/seed/glint-gallery-1/400/300', alt: 'Dental clinic photo 1' },
  { src: 'https://picsum.photos/seed/glint-gallery-2/400/300', alt: 'Dental clinic photo 2' },
  { src: 'https://picsum.photos/seed/glint-gallery-3/400/300', alt: 'Dental clinic photo 3' },
  { src: 'https://picsum.photos/seed/glint-gallery-4/400/300', alt: 'Dental clinic photo 4' },
] as const

export function Gallery() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
