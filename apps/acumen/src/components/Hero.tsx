export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/acumen-hero/1600/900"
          alt="Business team collaborating"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:py-44">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-brand to-brand-light" />
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              We Are Provide Creative Business
            </h1>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Quick and powerful solutions for your business needs. We help you grow with creative
            strategies and modern technology.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-brand to-brand-light px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-white hover:text-brand"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  )
}
