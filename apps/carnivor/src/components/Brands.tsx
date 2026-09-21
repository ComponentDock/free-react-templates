const brands = [
  'Prime Cuts Co',
  'Flame & Fork',
  'The Butcher Guild',
  'Smoke Haus',
  'Grill Masters',
] as const

export function Brands() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl text-ink md:text-4xl">In Association With</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            We partner with the finest suppliers and brands to bring you an unmatched dining
            experience. Every ingredient is sourced with care and quality in mind.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-16 items-center rounded-lg border border-gray-200 px-6 text-sm font-medium text-mist transition-colors hover:border-brand hover:text-brand"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
