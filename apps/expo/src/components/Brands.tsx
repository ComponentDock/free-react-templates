export function Brands() {
  const brands = [
    { name: 'Brand 1', seed: 'brand1' },
    { name: 'Brand 2', seed: 'brand2' },
    { name: 'Brand 3', seed: 'brand3' },
    { name: 'Brand 4', seed: 'brand4' },
    { name: 'Brand 5', seed: 'brand5' },
    { name: 'Brand 6', seed: 'brand6' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-12 text-2xl font-semibold text-text-dark font-heading">
          Trusted by over 3,000 world&apos;s leading companies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand) => (
            <img
              key={brand.seed}
              src={`https://picsum.photos/seed/${brand.seed}/120/60`}
              alt={brand.name}
              className="h-12 w-auto opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
