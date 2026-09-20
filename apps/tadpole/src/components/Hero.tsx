export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[600px] items-center bg-gradient-to-r from-brand-pink to-pink-400"
    >
      <img
        src="https://picsum.photos/seed/tadpole-hero/1920/900"
        alt="Children playing in a bright classroom"
        className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-40"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center text-white sm:px-6">
        <p className="font-display text-lg font-semibold uppercase tracking-wider text-brand-yellow">
          Welcome to Tadpole
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Where Little Minds Grow Big Dreams
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Nurturing curiosity and creativity in a fun, safe, and colorful environment. Your
          child&apos;s learning adventure starts here.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#programs"
            className="btn-pill bg-brand-yellow px-8 py-3 text-sm font-bold text-brand-dark hover:bg-yellow-400 transition-colors"
          >
            Explore Programs
          </a>
          <a
            href="#about"
            className="btn-pill border-2 border-white px-8 py-3 text-sm font-bold text-white hover:bg-white hover:text-brand-pink transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
