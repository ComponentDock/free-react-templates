const brands = [
  { name: 'Brand Alpha', seed: 'civicpulse-brand1' },
  { name: 'Brand Beta', seed: 'civicpulse-brand2' },
  { name: 'Brand Gamma', seed: 'civicpulse-brand3' },
  { name: 'Brand Delta', seed: 'civicpulse-brand4' },
  { name: 'Brand Epsilon', seed: 'civicpulse-brand5' },
] as const

export function Brands() {
  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale transition-all duration-300 hover:grayscale-0">
          {brands.map((brand) => (
            <img
              key={brand.seed}
              src={`https://picsum.photos/seed/${brand.seed}/150/60`}
              alt={brand.name}
              loading="lazy"
              className="h-12 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
