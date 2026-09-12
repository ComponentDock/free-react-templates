const brands = [
  { name: 'Airlines Co', logo: 'https://picsum.photos/seed/passage-brand1/150/60' },
  { name: 'Travel Partners', logo: 'https://picsum.photos/seed/passage-brand2/150/60' },
  { name: 'Global Edu', logo: 'https://picsum.photos/seed/passage-brand3/150/60' },
  { name: 'Visa Pro', logo: 'https://picsum.photos/seed/passage-brand4/150/60' },
  { name: 'Settle Easy', logo: 'https://picsum.photos/seed/passage-brand5/150/60' },
]

export function BrandLogos() {
  return (
    <section className="bg-mist py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Trusted By Leading Organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-12 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
