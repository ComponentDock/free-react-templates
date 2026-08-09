export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-ink"
    >
      <img
        src="https://picsum.photos/seed/razor-hero/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-ink/90" />
      <div className="relative mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          Welcome to Razor
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-tight text-white md:text-6xl lg:text-7xl">
          We Will Make Your Style <span className="text-brand">of Your Dreams</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </p>
        <a
          href="#services"
          className="mt-9 inline-flex items-center rounded-full border-2 border-brand px-9 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand hover:text-ink"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  )
}
