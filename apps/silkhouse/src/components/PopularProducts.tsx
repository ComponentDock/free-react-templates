const popularItems = [
  {
    id: 1,
    name: 'Designer Handbag',
    price: 120,
    image: 'https://picsum.photos/seed/silkhouse-pop-1/600/400',
  },
  {
    id: 2,
    name: 'Cashmere Scarf',
    price: 55,
    image: 'https://picsum.photos/seed/silkhouse-pop-2/600/400',
  },
  {
    id: 3,
    name: 'Vintage Watch',
    price: 200,
    image: 'https://picsum.photos/seed/silkhouse-pop-3/600/400',
  },
]

export function PopularProducts() {
  return (
    <section aria-label="Popular products" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2
          className="mb-10 text-center text-3xl font-semibold text-text-dark"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Popular Items
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {popularItems.map((item) => (
            <div key={item.id} className="group">
              <div className="mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[280px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-2 text-lg font-medium text-text-dark">{item.name}</h3>
              <p className="mb-4 text-sm text-text-muted">${item.price}.00</p>
              <a
                href="#shop"
                className="inline-block border-2 border-brand px-6 py-2 text-xs font-semibold uppercase text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Shop Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
