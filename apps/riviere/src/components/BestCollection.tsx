const featuredProducts = [
  {
    name: 'Leather Jacket',
    price: '$180.00',
    image: 'https://picsum.photos/seed/riviere-feat1/300/350',
  },
  {
    name: 'Wool Coat',
    price: '$150.00',
    image: 'https://picsum.photos/seed/riviere-feat2/300/350',
  },
  {
    name: 'Cotton Shirt',
    price: '$45.00',
    image: 'https://picsum.photos/seed/riviere-feat3/300/350',
  },
]

export function BestCollection() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-[var(--font-heading)] mb-10 text-center text-3xl font-bold text-ink dark:text-white">
          Best Collection of This Month
        </h2>
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Promo image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/riviere-promo/600/700"
              alt="Featured collection promotion"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Product grid */}
          <div className="grid grid-cols-2 gap-4">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="group rounded-lg bg-paper p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
              >
                <div className="mb-3 overflow-hidden rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-sm font-medium text-ink dark:text-white">{product.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
