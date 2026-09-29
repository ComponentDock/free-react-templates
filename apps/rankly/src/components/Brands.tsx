const BRANDS = [
  { name: 'Brand 1', seed: 'rankly-brand1' },
  { name: 'Brand 2', seed: 'rankly-brand2' },
  { name: 'Brand 3', seed: 'rankly-brand3' },
  { name: 'Brand 4', seed: 'rankly-brand4' },
  { name: 'Brand 5', seed: 'rankly-brand5' },
]

export function Brands() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {BRANDS.map((b) => (
            <a
              key={b.name}
              href="#"
              className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={`https://picsum.photos/seed/${b.seed}/150/60`}
                alt={b.name}
                className="h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
