const galleryImages = [
  { seed: 'seaview-gal-1', alt: 'Hotel lobby' },
  { seed: 'seaview-gal-2', alt: 'Ocean view room' },
  { seed: 'seaview-gal-3', alt: 'Infinity pool' },
  { seed: 'seaview-gal-4', alt: 'Beachfront terrace' },
]

export function Intro() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">Welcome</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
            Amazing Hotel in front of the Sea
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-ink">
            Nestled along a pristine coastline, Seaview Hotel offers an unparalleled retreat where
            sun-kissed mornings meet starlit evenings. Every detail has been crafted to ensure your
            stay is as relaxing as it is unforgettable.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((img) => (
            <div key={img.seed} className="group relative overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/60">
                <span className="text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  + See More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
