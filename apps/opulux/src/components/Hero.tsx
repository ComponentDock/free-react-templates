export function Hero() {
  return (
    <section className="relative flex h-[70vh] min-h-[480px] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/opulux-hero/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white">
        <p className="mb-2 text-sm uppercase tracking-widest text-gold-light">
          Hotels &amp; Resorts
        </p>
        <h1 className="font-heading text-5xl font-bold md:text-7xl">Welcome To Opulux</h1>
        <p className="mt-4 text-lg text-white/80">Enjoy A Luxury Experience</p>
        <a
          href="#booking"
          className="mt-8 inline-block rounded bg-cyan px-8 py-3 font-medium text-white transition-colors hover:bg-cyan-hover"
        >
          Join With Us
        </a>
      </div>
    </section>
  )
}
