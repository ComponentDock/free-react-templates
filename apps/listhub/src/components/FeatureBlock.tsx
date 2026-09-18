export function FeatureBlock() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/listhub-cafe/700/450"
              alt="Best Cafes and Bars"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2
              className="mb-4 text-3xl font-bold text-heading"
              style={{ fontFamily: 'var(--font-family-heading)' }}
            >
              Best Caf&eacute; &amp; Bars
            </h2>
            <p className="mb-6 leading-relaxed text-text-muted">
              Discover and connect with great local businesses in your local neighborhood like
              dentists, hair stylists and more. Find the best cafes and bars near you with user
              reviews and ratings.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-hover"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
