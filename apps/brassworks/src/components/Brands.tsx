import { brands, notices } from '../content'

/**
 * Eight supplier tiles in one surface: a 1 px gutter is the tinted ground
 * showing through `gap-px`, so the tiles read as a ruled table rather than
 * eight separate cards.
 */
export function Brands() {
  return (
    <section
      id="brands"
      className="border-y border-ink-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-sm font-bold tracking-wide text-primary-600 uppercase">Brands</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-800 dark:text-white">
          What we carry
        </h2>

        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg bg-ink-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-gray-800">
          {brands.map((brand) => (
            <li key={brand.name} className="bg-white p-5 dark:bg-gray-900">
              <p className="text-base font-bold tracking-tight text-ink-800 dark:text-white">
                {brand.name}
              </p>
              <p className="mt-1 text-sm text-ink-400">{brand.range}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-ink-400">{notices.brands}</p>
      </div>
    </section>
  )
}
