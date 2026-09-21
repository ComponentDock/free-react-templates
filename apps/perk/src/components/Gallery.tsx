const galleryImages = [
  { src: 'https://picsum.photos/seed/perk-g1/400/300', alt: 'Coffee gallery', span: 'col-span-1' },
  { src: 'https://picsum.photos/seed/perk-g2/400/300', alt: 'Coffee gallery', span: 'col-span-1' },
  { src: 'https://picsum.photos/seed/perk-g3/800/400', alt: 'Coffee gallery', span: 'col-span-2' },
  { src: 'https://picsum.photos/seed/perk-g4/400/300', alt: 'Coffee gallery', span: 'col-span-1' },
  { src: 'https://picsum.photos/seed/perk-g5/400/300', alt: 'Coffee gallery', span: 'col-span-1' },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-ink md:text-4xl">
            What kind of Coffee we serve for you
          </h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div key={img.src} className={i === 2 ? 'md:col-span-2' : ''}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
