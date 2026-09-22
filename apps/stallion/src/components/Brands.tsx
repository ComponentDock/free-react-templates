const brands = ['Brand Alpha', 'Brand Beta', 'Brand Gamma', 'Brand Delta', 'Brand Epsilon']

export function Brands() {
  return (
    <section className="border-y border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-16 w-28 items-center justify-center text-lg font-bold text-gray-300 transition-colors hover:text-muted"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
