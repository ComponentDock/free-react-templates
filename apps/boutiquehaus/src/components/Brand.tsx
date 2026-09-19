const brands = [
  { name: 'Brand 1', image: 'https://picsum.photos/seed/bh-brand1/150/60' },
  { name: 'Brand 2', image: 'https://picsum.photos/seed/bh-brand2/150/60' },
  { name: 'Brand 3', image: 'https://picsum.photos/seed/bh-brand3/150/60' },
  { name: 'Brand 4', image: 'https://picsum.photos/seed/bh-brand4/150/60' },
  { name: 'Brand 5', image: 'https://picsum.photos/seed/bh-brand5/150/60' },
] as const

export function Brand() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((b) => (
            <a
              key={b.name}
              href="#"
              className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <img src={b.image} alt={b.name} className="h-12 w-auto" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
