export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/millstone-hero/1600/700')",
      }}
      aria-label="Hero"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="bg-primary-400/95 p-8 md:p-12 max-w-lg">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase leading-tight mb-4">
            Industry
            <br />
            Solutions!
          </h1>
          <p className="font-body text-white/90 text-sm mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded font-heading text-sm font-semibold uppercase hover:bg-navy-deep transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Diagonal stripe accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-4"
        style={{
          background:
            'repeating-linear-gradient(45deg, #f27420 0, #f27420 10px, transparent 10px, transparent 20px)',
        }}
      />
    </section>
  )
}
