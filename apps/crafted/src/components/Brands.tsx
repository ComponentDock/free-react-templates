const brands = ['Hexlab', 'Vantage', 'Northwind', 'Pixelcraft', 'Orbital', 'Summit Co'] as const

export function Brands() {
  return (
    <section
      aria-label="Client brands"
      className="border-b border-gray-100 bg-paper py-10 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6">
        {brands.map((brand) => (
          <p
            key={brand}
            className="text-center font-display text-lg font-semibold text-gray-400 transition-colors hover:text-primary-500 dark:text-gray-500 dark:hover:text-primary-400"
          >
            {brand}
          </p>
        ))}
      </div>
    </section>
  )
}
