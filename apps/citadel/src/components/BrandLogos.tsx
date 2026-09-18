const brands = [
  { name: 'Brand 1', seed: 'citadel-brand-1' },
  { name: 'Brand 2', seed: 'citadel-brand-2' },
  { name: 'Brand 3', seed: 'citadel-brand-3' },
  { name: 'Brand 4', seed: 'citadel-brand-4' },
  { name: 'Brand 5', seed: 'citadel-brand-5' },
  { name: 'Brand 6', seed: 'citadel-brand-6' },
]

export function BrandLogos() {
  return (
    <section className="bg-smoke py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.seed}
              className="flex h-16 items-center justify-center opacity-50 grayscale"
            >
              <img
                src={`https://picsum.photos/seed/${brand.seed}/140/50`}
                alt={brand.name}
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
