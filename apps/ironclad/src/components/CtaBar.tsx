export function CtaBar() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/ironclad-cta/1920/600')" }}
    >
      <div className="absolute inset-0 bg-brand-400/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Providing Personalized and High Quality Services
        </h2>
        <p className="text-white/90 mb-6">
          We can manage your dream building. A small river named Duden flows by their place.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-brand-400 hover:bg-gray-100 px-8 py-3 rounded font-medium transition-colors"
        >
          Request A Quote
        </a>
      </div>
    </section>
  )
}
