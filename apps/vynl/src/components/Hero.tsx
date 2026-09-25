export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/vynl-hero/1920/1080')" }}
      data-testid="hero"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold text-white font-heading md:text-6xl">
            Vynl Music Fest
          </h1>
          <p className="mb-8 text-lg text-white/70">
            Events every night, join with us! Experience the best live DJ performances, curated
            playlists, and unforgettable nights of music.
          </p>
          <a
            href="#events"
            className="inline-block border-2 border-brand-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-brand-gold transition-colors hover:bg-brand-gold hover:text-white"
          >
            Join Us
          </a>
        </div>
      </div>
    </section>
  )
}
