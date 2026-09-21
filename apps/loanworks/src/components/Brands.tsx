const brands = [
  { name: 'Brand 1', image: 'https://picsum.photos/seed/loanworks-brand1/150/50' },
  { name: 'Brand 2', image: 'https://picsum.photos/seed/loanworks-brand2/150/50' },
  { name: 'Brand 3', image: 'https://picsum.photos/seed/loanworks-brand3/150/50' },
  { name: 'Brand 4', image: 'https://picsum.photos/seed/loanworks-brand4/150/50' },
  { name: 'Brand 5', image: 'https://picsum.photos/seed/loanworks-brand5/150/50' },
]

export function Brands() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((b) => (
            <img
              key={b.name}
              src={b.image}
              alt={b.name}
              className="h-10 w-auto opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
