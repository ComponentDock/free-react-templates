const products = [
  { name: 'Classic Black', price: '£399.00', seed: 'ticktock-prod1' },
  { name: 'Rose Gold', price: '£449.00', seed: 'ticktock-prod2' },
  { name: 'Silver Elite', price: '£499.00', seed: 'ticktock-prod3' },
  { name: 'Titanium Pro', price: '£599.00', seed: 'ticktock-prod4' },
]

export function Products() {
  return (
    <section id="products" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white">Some Features That Made Us Unique</h2>
          <p className="text-gray-400">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-lg bg-gray-800 transition hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${p.seed}/400/300`}
                alt={p.name}
                className="h-48 w-full object-cover transition group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-white">{p.name}</h3>
                <p className="mb-3 text-sm font-medium text-primary-400">{p.price}</p>
                <a
                  href="#products"
                  className="inline-block rounded bg-primary-500 px-6 py-2 text-xs font-semibold uppercase text-white transition hover:bg-primary-600"
                >
                  Pre Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
