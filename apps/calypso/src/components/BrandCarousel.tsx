const brands = [
  'Brand Alpha',
  'Brand Beta',
  'Brand Gamma',
  'Brand Delta',
  'Brand Epsilon',
  'Brand Zeta',
] as const

export function BrandCarousel() {
  return (
    <section
      data-testid="brand-carousel"
      className="border-y border-gray-100 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Trusted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-12 w-28 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-400 transition-colors hover:border-brand-300 hover:text-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:hover:border-brand-600 dark:hover:text-brand-400"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
