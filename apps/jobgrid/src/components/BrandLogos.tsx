const brands = [
  'Company 1',
  'Company 2',
  'Company 3',
  'Company 4',
  'Company 5',
  'Company 6',
] as const

export function BrandLogos() {
  return (
    <section className="border-b border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-10 items-center rounded-lg bg-gray-100 px-6 text-sm font-semibold text-gray-400"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
