const images = [
  { seed: 'gracious-gallery-1', alt: 'Community event' },
  { seed: 'gracious-gallery-2', alt: 'Volunteer work' },
  { seed: 'gracious-gallery-3', alt: 'Charity gathering' },
  { seed: 'gracious-gallery-4', alt: 'Donation drive' },
  { seed: 'gracious-gallery-5', alt: 'Education program' },
  { seed: 'gracious-gallery-6', alt: 'Healthcare outreach' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 transition-colors lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Our Gallery
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">Photo Gallery</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image) => (
            <div key={image.seed} className="group relative overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${image.seed}/400/300`}
                alt={image.alt}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110 sm:h-56"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-semibold uppercase tracking-wider text-white">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
