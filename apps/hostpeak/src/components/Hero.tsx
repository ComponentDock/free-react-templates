export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-gradient-to-r from-brand-start to-brand-end px-4 pb-20 pt-40 text-center sm:pt-52 lg:pt-72"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-wider text-white/80">
          Smart Company With Perfect Space
        </p>
        <h1 className="mb-6 text-4xl font-bold uppercase text-white sm:text-5xl lg:text-6xl">
          Powerful Web Hosting
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base text-white/90">
          Experience blazing-fast, reliable web hosting with 99.9% uptime guarantee. Your website
          deserves the best infrastructure to thrive.
        </p>
        <a
          href="#pricing"
          className="inline-block rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-heading"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
