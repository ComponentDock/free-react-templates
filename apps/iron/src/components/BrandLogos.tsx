const brands = [
  { name: 'FitPro', color: '#38a4ff' },
  { name: 'GymStar', color: '#4cd3e3' },
  { name: 'PowerLift', color: '#f6214b' },
  { name: 'FlexFit', color: '#222222' },
  { name: 'IronCore', color: '#777777' },
] as const

export function BrandLogos() {
  return (
    <section aria-label="Partner brands" className="bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 px-4 sm:px-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex h-16 w-28 items-center justify-center rounded-md transition-opacity hover:opacity-70"
            style={{ backgroundColor: brand.color }}
          >
            <span className="text-sm font-bold tracking-wider text-white">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
