const BRANDS = ['Vertex', 'Nimbus', 'Polar', 'Hexa', 'Craftly', 'Lumen'] as const

/* Brand strip recreated from the source's grayscale logo carousel: a row of
   six grayscale brand wordmarks (simple text marks, no assets copied). */

export function Brands() {
  return (
    <section aria-label="Brands" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-10 px-4 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="text-center text-xl font-semibold tracking-wide text-ink opacity-40 grayscale transition-opacity hover:opacity-80"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
