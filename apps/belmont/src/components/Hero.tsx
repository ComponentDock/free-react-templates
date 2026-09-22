export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-brand-darker text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/belmont-hero/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-brand-darker/50" />

      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-accent">
          luxury resort
        </p>
        <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Amazing Services, Location &amp; Facilities
        </h1>
        <div className="mt-8">
          <button className="rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  )
}
