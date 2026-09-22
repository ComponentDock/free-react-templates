const images = [
  { seed: 'pavilion-gallery1', alt: 'Hotel lobby panoramic view' },
  { seed: 'pavilion-gallery2', alt: 'Luxury suite bedroom' },
  { seed: 'pavilion-gallery3', alt: 'Restaurant fine dining' },
  { seed: 'pavilion-gallery4', alt: 'Swimming pool area' },
  { seed: 'pavilion-gallery5', alt: 'Spa and wellness center' },
  { seed: 'pavilion-gallery6', alt: 'Rooftop terrace at night' },
] as const

export function Gallery() {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Photo Gallery
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">Our Gallery</h2>
        </div>
        <div className="mt-12 flex gap-4 overflow-x-auto pb-4">
          {images.map((img) => (
            <div key={img.seed} className="shrink-0">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                className="h-48 w-64 rounded-xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
