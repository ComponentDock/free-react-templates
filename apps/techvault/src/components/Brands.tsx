const BRANDS = [
  'Brand One',
  'Brand Two',
  'Brand Three',
  'Brand Four',
  'Brand Five',
  'Brand Six',
  'Brand Seven',
  'Brand Eight',
]

export function Brands() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {BRANDS.map((brand) => (
            <a
              key={brand}
              href="#"
              className="flex h-16 w-32 items-center justify-center rounded-lg border border-gray-100 bg-mist px-4 font-display text-xs font-semibold text-smoke transition-colors hover:border-primary-400 hover:text-primary-400"
            >
              {brand}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
