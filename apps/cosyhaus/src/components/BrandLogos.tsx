const brands = ['Brand Alpha', 'Brand Beta', 'Brand Gamma', 'Brand Delta', 'Brand Epsilon'] as const

export function BrandLogos() {
  return (
    <section className="border-y border-gray-200 bg-paper-alt py-12 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg font-bold uppercase tracking-wider text-gray-400 dark:text-gray-600"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
