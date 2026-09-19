export function CallToAction() {
  return (
    <section className="relative py-24">
      <img
        src="https://picsum.photos/seed/bloomfield-cta/1600/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bloom-400/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-lg">
          <span className="mb-2 block text-sm font-bold uppercase tracking-[4px] text-white/90">
            Custom flower
          </span>
          <h2
            className="mb-8 text-3xl font-normal leading-snug text-white sm:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Let our flowers make your party more perfect.
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-bloom-400 transition-colors hover:bg-gray-100"
            >
              Order Now
            </a>
            <a
              href="#contact"
              className="inline-block rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
