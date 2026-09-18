const images = [
  { src: 'https://picsum.photos/seed/glint-gallery1/400/300', alt: 'Dental clinic reception' },
  { src: 'https://picsum.photos/seed/glint-gallery2/400/300', alt: 'Modern dental equipment' },
  { src: 'https://picsum.photos/seed/glint-gallery3/400/300', alt: 'Happy patient smiling' },
  { src: 'https://picsum.photos/seed/glint-gallery4/400/300', alt: 'Dental team at work' },
] as const

export function Gallery() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-48 w-full rounded object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
