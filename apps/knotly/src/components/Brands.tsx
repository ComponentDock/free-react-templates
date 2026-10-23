const brands = ['Nexora', 'Vantum', 'Brightly', 'Orbitix', 'Lumina', 'Keystone'] as const

export function Brands() {
  return (
    <section className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul
          aria-label="Trusted by leading companies"
          className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6"
        >
          {brands.map((brand) => (
            <li
              key={brand}
              className="font-display text-xl font-bold tracking-wide text-gray-300 dark:text-gray-600"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
