const brands = ['Vertex Build', 'Structura', 'Apex Design', 'BluePlan', 'Nexus Arch'] as const

export function Brands() {
  return (
    <section className="border-y border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-4 sm:px-6">
        {brands.map((brand, i) => (
          <img
            key={brand}
            src={`https://picsum.photos/seed/arclabs-brand-${i + 1}/180/60`}
            alt={`${brand} logo`}
            className="h-10 w-auto opacity-50 grayscale transition-opacity hover:opacity-100"
          />
        ))}
      </div>
    </section>
  )
}
