export function OfferSection() {
  return (
    <section
      aria-label="Special offer"
      className="relative h-[400px] overflow-hidden sm:h-[500px] lg:h-[600px]"
    >
      <img
        src="https://picsum.photos/seed/vignette-offer/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto flex h-full max-w-7xl items-end justify-end px-4 pb-16 sm:px-6 lg:pb-24">
        <div className="max-w-md text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            White T-shirt{' '}
            <span className="ml-2 inline-block rounded bg-brand px-2 py-0.5 text-xs font-bold uppercase">
              Hot
            </span>
          </h2>
          <p className="mt-3 text-sm text-white/80">* Free shipping until 25 Dec 2025</p>
          <div className="mt-4">
            <span className="text-lg font-bold text-white/50 line-through">$25.90</span>{' '}
            <span className="text-2xl font-bold">$15.90</span>
          </div>
          <a
            href="#shop"
            className="mt-6 inline-block rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
