const products = [
  {
    title: 'Home Insurance',
    description:
      'Protect your most valuable asset with comprehensive home coverage that gives you peace of mind.',
    image: 'https://picsum.photos/seed/refuge-home/600/400',
  },
  {
    title: 'Auto Insurance',
    description: 'Get reliable auto coverage tailored to your driving habits and vehicle needs.',
    image: 'https://picsum.photos/seed/refuge-auto/600/400',
  },
  {
    title: 'Travel Insurance',
    description: 'Travel with confidence knowing you are covered for unexpected events abroad.',
    image: 'https://picsum.photos/seed/refuge-travel/600/400',
  },
]

export function Products() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block font-display text-sm font-bold uppercase tracking-wider text-brand">
            Products &amp; Services
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            Insurance Coverage
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-display text-xl font-bold uppercase text-ink">
                  {product.title}
                </h3>
                <p className="mb-4 text-mist">{product.description}</p>
                <a
                  href="#"
                  className="inline-block rounded bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
