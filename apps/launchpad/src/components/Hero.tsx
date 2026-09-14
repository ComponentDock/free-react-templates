export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-br from-brand-600 to-brand-800 pt-20"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            All you want is here
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            We build powerful SaaS tools that help startups launch faster, scale smarter, and
            delight customers at every touchpoint.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#offer"
              className="rounded bg-white px-6 py-3 text-sm font-semibold text-brand-600 shadow transition hover:bg-gray-100"
            >
              Explore Services
            </a>
            <a
              href="#about"
              className="rounded border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
