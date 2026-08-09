const brands = ['BELLA', 'VELOUR', 'LUMIÈRE', 'CHIC', 'AURA'] as const

export function Brands() {
  return (
    <section aria-label="Brands" className="border-y border-white/10 bg-gray-950 py-10">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 sm:px-6">
        {brands.map((brand) => (
          <li
            key={brand}
            className="font-sans text-xl font-bold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-rouge-300"
          >
            {brand}
          </li>
        ))}
      </ul>
    </section>
  )
}
