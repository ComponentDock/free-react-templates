export function CTAApp() {
  return (
    <section className="py-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 py-24 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
              Get the Nav<span className="text-brand">point</span> App
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Download our app for the best experience. Browse listings on the go, save your
              favorites, and get personalized recommendations based on your location and
              preferences.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-block bg-text-primary text-white text-xs font-semibold px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                App Store
              </a>
              <a
                href="#"
                className="inline-block bg-text-primary text-white text-xs font-semibold px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Google Play
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-72 h-80 bg-gray-100 rounded-t-3xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/navpoint-phone/300/400"
              alt="Navpoint app preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
