const logos = [
  { name: 'Brand 1', image: 'shopcraft-brand-1' },
  { name: 'Brand 2', image: 'shopcraft-brand-2' },
  { name: 'Brand 3', image: 'shopcraft-brand-3' },
  { name: 'Brand 4', image: 'shopcraft-brand-4' },
  { name: 'Brand 5', image: 'shopcraft-brand-5' },
]

export function BrandLogos() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href="#"
              className="opacity-50 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={`https://picsum.photos/seed/${logo.image}/120/60`}
                alt={logo.name}
                className="h-12 w-auto"
                width={120}
                height={60}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
