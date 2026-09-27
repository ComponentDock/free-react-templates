export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center py-32"
      style={{ backgroundImage: "url('https://picsum.photos/seed/propwell-hero/1600/800')" }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Find your place with our
          <br />
          local life style
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
          Discover the best properties in your area with Propwell
        </p>
        <a
          href="#properties"
          className="inline-block mt-8 bg-primary text-white font-bold uppercase tracking-wider px-8 py-3 hover:bg-primary-dark transition"
        >
          View Detail
        </a>
      </div>
    </section>
  )
}
