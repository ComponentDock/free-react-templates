const brands = ['Northgate', 'Meridian', 'Carewell', 'Vantage', 'Apexline', 'Bluepeak'] as const

export function Brands() {
  return (
    <section aria-label="Brands we have worked with" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 opacity-70">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-xl font-black uppercase tracking-widest text-gray-400 grayscale"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
