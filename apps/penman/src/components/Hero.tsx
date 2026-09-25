export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-white pt-16">
      <div className="mx-auto grid max-w-7xl items-center px-4 md:grid-cols-2 md:gap-8 md:px-8">
        <div className="flex flex-col justify-center py-16 md:py-0">
          <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-400">
            Best Seller Book Of The Week
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
            Clue Of The Wooden Cottage
          </h1>
          <p className="mb-8 max-w-lg text-lg text-smoke">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-block rounded bg-primary-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Buy Now For $22.78
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center py-8 md:py-0">
          <img
            src="https://picsum.photos/seed/penman-hero/500/600"
            alt="Book illustration"
            className="w-full max-w-md rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
