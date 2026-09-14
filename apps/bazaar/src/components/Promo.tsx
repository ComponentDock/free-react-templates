export function Promo() {
  return (
    <section
      className="relative flex min-h-[400px] items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bazaar-promo/1920/600)' }}
      aria-label="Promotional offer"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="flex-shrink-0 text-center">
            <div className="inline-block rounded border-2 border-brand p-6">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-6xl font-bold text-brand">45</span>
                <span className="text-2xl font-bold text-brand">%</span>
              </div>
              <span className="block text-lg font-bold uppercase text-brand">Off</span>
              <span className="block font-display text-3xl font-bold text-white">Sale</span>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold text-white md:text-3xl">
              Just hurry up limited offer!
            </h3>
            <p className="mb-6 max-w-md text-white/80">
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>
            <div className="flex gap-3">
              <a
                href="#shop"
                className="rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-brand-dark"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="rounded border-2 border-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-ink"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
