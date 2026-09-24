const brands = ['BrandOne', 'BrandTwo', 'BrandThree', 'BrandFour', 'BrandFive']

export function Brands() {
  return (
    <section className="bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {brands.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0"
            >
              <span className="font-heading text-xl font-bold text-heading/60">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
