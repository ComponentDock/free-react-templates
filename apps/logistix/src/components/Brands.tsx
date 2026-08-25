const BRANDS = ['Partner Alpha', 'Global Freight Co', 'Swift Logistics', 'CargoPrime'] as const

export function Brands() {
  return (
    <section className="border-t border-gray-100 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="text-xl font-bold uppercase tracking-wider text-gray-300 transition-colors hover:text-gray-500"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
