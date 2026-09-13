interface NewProduct {
  name: string
  price: string
  seed: string
}

const newProducts: ReadonlyArray<NewProduct> = [
  { name: 'Umcka Cold Care', price: '$120.00', seed: 'elixir-new-1' },
  { name: 'Bioderma', price: '$55.00', seed: 'elixir-new-2' },
  { name: 'Chanca Piedra', price: '$70.00', seed: 'elixir-new-3' },
  { name: 'Cetyl Pure', price: '$20.00', seed: 'elixir-new-4' },
]

export function NewProducts() {
  return (
    <section className="bg-paper py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-wide text-ink">
          New Products
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {newProducts.map((product) => (
            <div key={product.name} className="min-w-[220px] shrink-0 text-center">
              <img
                src={`https://picsum.photos/seed/${product.seed}/400/400`}
                alt={product.name}
                className="mx-auto mb-4 h-48 w-48 object-contain"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-ink">
                <a href="#product" className="hover:text-brand">
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-mist">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
