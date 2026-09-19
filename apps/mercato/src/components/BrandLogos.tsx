const brands = [
  { name: 'Brand 1', image: 'https://picsum.photos/seed/mercato-brand1/200/80' },
  { name: 'Brand 2', image: 'https://picsum.photos/seed/mercato-brand2/200/80' },
  { name: 'Brand 3', image: 'https://picsum.photos/seed/mercato-brand3/200/80' },
  { name: 'Brand 4', image: 'https://picsum.photos/seed/mercato-brand4/200/80' },
  { name: 'Brand 5', image: 'https://picsum.photos/seed/mercato-brand5/200/80' },
]

export function BrandLogos() {
  return (
    <section className="py-16 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-4">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href="#"
            className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
