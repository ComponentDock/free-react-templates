export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/alleluia-hero/1920/1080')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="font-oldstandard text-5xl md:text-7xl font-bold text-white mb-6">
          Our lives in praising God
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          Join our community in worship, fellowship, and service. Everyone is welcome.
        </p>
        <a
          href="#about"
          className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded font-semibold transition-colors"
        >
          Discover More
        </a>
      </div>
    </section>
  )
}
