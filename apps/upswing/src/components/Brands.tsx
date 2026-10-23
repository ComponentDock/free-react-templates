const brands = ['Hexlab', 'Vantage', 'Northwind', 'Pixelcraft', 'Orbital'] as const

export function Brands() {
  return (
    <section aria-label="Client brands" className="bg-white py-14 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
        {brands.map((brand) => (
          <p
            key={brand}
            className="text-center text-lg font-semibold tracking-wide text-gray-400 transition-colors hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400"
          >
            {brand}
          </p>
        ))}
      </div>
    </section>
  )
}
