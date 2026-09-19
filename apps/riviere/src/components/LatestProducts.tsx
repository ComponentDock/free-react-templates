const products = [
  {
    name: 'Winter Jacket',
    price: '$120.00',
    image: 'https://picsum.photos/seed/riviere-p1/300/350',
  },
  {
    name: 'Casual Blazer',
    price: '$95.00',
    image: 'https://picsum.photos/seed/riviere-p2/300/350',
  },
  {
    name: 'Denim Jeans',
    price: '$65.00',
    image: 'https://picsum.photos/seed/riviere-p3/300/350',
  },
  {
    name: 'Knit Sweater',
    price: '$85.00',
    image: 'https://picsum.photos/seed/riviere-p4/300/350',
  },
]

export function LatestProducts() {
  return (
    <section className="bg-paper py-16 dark:bg-gray-900" id="latest">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-[var(--font-heading)] mb-10 text-center text-3xl font-bold text-ink dark:text-white">
          Latest Products
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <div className="mb-3 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium text-ink dark:text-white">{product.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
