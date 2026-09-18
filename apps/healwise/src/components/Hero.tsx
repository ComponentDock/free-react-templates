export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-ink"
      data-testid="hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/healwise-hero/1200/600')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
          Welcome to Healwise
        </p>
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          We Provide Quality
          <br />
          Healthcare Services
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
          We are committed to providing you with the best medical care with state-of-the-art
          equipment and experienced doctors.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="rounded border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
