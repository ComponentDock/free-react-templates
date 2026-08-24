export function About() {
  return (
    <section id="about" className="bg-mist py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/havenridge-about-2/600/400"
            alt="Havenridge office"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-500">
            About Us
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-ink">
            Havenridge A Real Estate Company
          </h2>
          <p className="mb-8 leading-relaxed text-smoke">
            Havenridge has been a trusted name in the real estate industry for decades. We are
            committed to helping our clients find their perfect property. Our experienced team of
            realtors provides personalized service and expert guidance throughout the entire buying
            and selling process.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary-500">50</span>
              <span className="text-sm font-semibold text-ink">Years</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary-500">210K+</span>
              <span className="text-sm font-semibold text-ink">Properties</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary-500">450</span>
              <span className="text-sm font-semibold text-ink">Realtors</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary-500">100</span>
              <span className="text-sm font-semibold text-ink">Branches</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
