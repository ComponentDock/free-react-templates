const brands = [
  'Architect Digest',
  'Design Weekly',
  'Home & Living',
  'Interior Pro',
  'Studio Mag',
] as const

export function BrandCarousel() {
  return (
    <section className="border-y border-gray-200 bg-light-bg py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg font-bold uppercase tracking-wider text-muted-gray/50 grayscale transition-all hover:grayscale-0 hover:text-dark-text"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
