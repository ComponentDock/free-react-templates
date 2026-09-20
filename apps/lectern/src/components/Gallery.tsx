const images = [
  { seed: 'lectern-gal-1', alt: 'Campus life photo 1' },
  { seed: 'lectern-gal-2', alt: 'Campus life photo 2' },
  { seed: 'lectern-gal-3', alt: 'Campus life photo 3' },
  { seed: 'lectern-gal-4', alt: 'Campus life photo 4' },
  { seed: 'lectern-gal-5', alt: 'Campus life photo 5' },
  { seed: 'lectern-gal-6', alt: 'Campus life photo 6' },
] as const

export function Gallery() {
  return (
    <section aria-label="Gallery" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((img) => (
            <div key={img.seed} className="group relative aspect-square overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${img.seed}/600/600`}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/50">
                <span className="text-2xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
