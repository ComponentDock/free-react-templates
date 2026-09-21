const brands = ['StrideX', 'RunFit', 'SoleCraft', 'UrbanKicks', 'ActiveEdge']

export function BrandLogos() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 lg:px-8">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0"
          >
            <span
              className="text-xl font-bold tracking-wider text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
