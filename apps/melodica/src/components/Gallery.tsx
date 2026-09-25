const galleryImages = [
  { seed: 'melodica-gal-1', alt: 'Concert crowd with lights' },
  { seed: 'melodica-gal-2', alt: 'Artist performing on stage' },
  { seed: 'melodica-gal-3', alt: 'Behind the scenes in studio' },
  { seed: 'melodica-gal-4', alt: 'Fans at live show' },
  { seed: 'melodica-gal-5', alt: 'Festival atmosphere' },
  { seed: 'melodica-gal-6', alt: 'Sound check preparation' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-deep-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-green">
            Gallery
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Moments Captured
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.seed}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? 'md:row-span-2 md:col-span-1' : ''
              }`}
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/${i === 0 ? '400/800' : '400/300'}`}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-deep-950/0 transition-colors group-hover:bg-deep-950/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
