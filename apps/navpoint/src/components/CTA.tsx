export function CTA() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/navpoint-cta/1920/500)' }}
    >
      <div className="absolute inset-0 bg-brand-dark/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Find the best places in town!
        </h2>
        <p className="text-white/80 text-lg font-semibold leading-relaxed mb-6">
          Discover restaurants, hotels, nightlife, and more in your favorite city. Curated listings
          to help you find exactly what you need.
        </p>
        <a
          href="#"
          className="inline-block bg-brand hover:bg-brand-hover text-white font-medium px-8 py-3 rounded transition-colors"
        >
          See the list
        </a>
      </div>
    </section>
  )
}
