import { brands } from '../data'

/** Client logo band on the brand gradient: six equal-width wordmark
 *  placeholders (logo assets are not copied, so styled text stands in). */
export function Brands() {
  return (
    <section aria-label="Brands" className="bg-gradient-to-br from-primary to-accent py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-center text-xl font-semibold uppercase tracking-widest text-white/85"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
