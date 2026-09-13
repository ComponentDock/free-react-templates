export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
      data-testid="hero"
    >
      <img
        src="https://picsum.photos/seed/landcraft-hero/1920/600"
        alt="Landscaping hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Landcraft</h2>
        <p className="text-lg mb-8 text-white/90">
          We are a professional landscaping company offering comprehensive outdoor design,
          maintenance, and renovation services for residential and commercial properties.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="px-6 py-3 bg-brand text-white font-semibold rounded hover:bg-brand-dark transition-colors"
          >
            Read More
          </a>
          <a
            href="#services"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-heading transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
