const brands = [
  { name: 'Brand 1', color: '#6382e6' },
  { name: 'Brand 2', color: '#FF8553' },
  { name: 'Brand 3', color: '#a367e7' },
  { name: 'Brand 4', color: '#e66686' },
  { name: 'Brand 5', color: '#4cd3e3' },
  { name: 'Brand 6', color: '#73fbaf' },
]

export function BrandCarousel() {
  return (
    <section className="border-y border-gray-100 bg-paper py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <div
                className="h-8 w-8 rounded-full"
                style={{ backgroundColor: brand.color }}
                aria-hidden="true"
              />
              <span className="font-display text-sm font-bold text-ink">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
