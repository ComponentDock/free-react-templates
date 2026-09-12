export function CallToAction() {
  return (
    <section className="relative py-20">
      <img
        src="https://picsum.photos/seed/petal-cta/1400/500"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-lg">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-rose-300">
            Custom flower
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl">
            Let our flowers make your party more perfect.
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block bg-rose-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-rose-500"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
