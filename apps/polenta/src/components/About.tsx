const galleryImages = [
  { seed: 'polenta-about-1', alt: 'Restaurant interior' },
  { seed: 'polenta-about-2', alt: 'Chef preparing dish' },
  { seed: 'polenta-about-3', alt: 'Plated dish' },
  { seed: 'polenta-about-4', alt: 'Wine selection' },
  { seed: 'polenta-about-5', alt: 'Dessert display' },
  { seed: 'polenta-about-6', alt: 'Fresh ingredients' },
  { seed: 'polenta-about-7', alt: 'Dining table setting' },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h4 className="font-sans text-base font-normal text-brand">About Us</h4>
          <h2 className="mt-2 font-display text-4xl text-ink">The Polenta Restaurant</h2>
          <div className="mx-auto mt-4 h-0.5 w-4 bg-brand" />
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <h4 className="text-lg font-bold leading-relaxed text-ink">
              Welcome to Polenta Restaurant. Since 1988, offering traditional dishes of the highest
              quality.
            </h4>
          </div>
          <div className="md:col-span-7">
            <p className="leading-relaxed text-mist">
              Our passion for authentic cuisine drives everything we do. From carefully sourced
              ingredients to time-honored recipes, each dish tells a story of tradition and
              craftsmanship. We invite you to experience the warmth of our kitchen and the richness
              of flavors that have delighted guests for decades.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img) => (
            <div key={img.seed} className="aspect-square overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/400`}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
