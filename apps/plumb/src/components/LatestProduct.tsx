export function LatestProduct() {
  return (
    <section id="about" aria-label="Latest product" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Latest Product
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink">Poisson Blanc</h2>
            <p className="mt-4 text-base leading-relaxed text-smoke">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/plumb-product/640/480"
              alt="Latest product showcase"
              className="w-full rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
