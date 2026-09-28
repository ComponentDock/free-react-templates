const brands = [
  'Steakhouse Pro',
  'Grill Master',
  'Prime Cuts',
  'BBQ Nation',
  'Fire & Flame',
  'The Smoke House',
]

export function Brands() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <span className="font-display text-sm tracking-wider text-brand">Partners</span>
        <h2 className="mt-3 font-display text-3xl text-heading dark:text-white">
          In association with
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-xl font-bold uppercase tracking-widest text-heading/30 transition-colors hover:text-brand dark:text-white/30 dark:hover:text-brand"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
