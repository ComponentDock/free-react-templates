const brands = ['Brand Alpha', 'Brand Beta', 'Brand Gamma', 'Brand Delta', 'Brand Epsilon'] as const

export function Brands() {
  return (
    <section className="bg-peach py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-2xl font-bold text-muted/50 transition-colors hover:text-muted"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
