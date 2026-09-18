const products = [
  {
    name: 'Umcka Cold Care',
    price: '$120.00',
    sale: true,
    image: 'https://picsum.photos/seed/remedy-prod-1/400/400',
  },
  {
    name: 'Umcka Cold Care',
    price: '$120.00',
    sale: false,
    image: 'https://picsum.photos/seed/remedy-prod-2/400/400',
  },
  {
    name: 'Umcka Cold Care',
    price: '$120.00',
    sale: true,
    image: 'https://picsum.photos/seed/remedy-prod-3/400/400',
  },
  {
    name: 'Umcka Cold Care',
    price: '$120.00',
    sale: false,
    image: 'https://picsum.photos/seed/remedy-prod-4/400/400',
  },
]

export function Products() {
  return (
    <section id="products" className="bg-paper py-16 md:py-20" data-testid="products">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink md:text-4xl">
          Pharmacy Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product, i) => (
            <div
              key={`${product.name}-${i}`}
              className="group overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {product.sale && (
                  <span className="absolute left-3 top-3 rounded bg-brand px-3 py-1 text-xs font-bold text-white">
                    Sale
                  </span>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="mb-2 text-sm font-bold text-ink">{product.name}</h3>
                <p className="text-sm text-brand">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
