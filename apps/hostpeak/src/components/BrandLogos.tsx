const brands = ['Brand Alpha', 'Brand Beta', 'Brand Gamma', 'Brand Delta', 'Brand Epsilon']

export function BrandLogos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h3 className="mb-10 text-center text-xl font-light text-body">
        Trusted by 12,000+ Happy Customers Worldwide
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-8 border-b border-border pb-14">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex h-12 w-32 items-center justify-center rounded bg-surface text-xs text-body/50"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  )
}
