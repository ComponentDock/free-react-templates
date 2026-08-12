import { brands } from '../data'

export function BrandsStrip() {
  return (
    <section aria-label="Brands" className="bg-cloud py-24 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-8 px-4 sm:px-6">
        {brands.map((brand) => (
          <span
            key={brand}
            className="font-display text-2xl font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
