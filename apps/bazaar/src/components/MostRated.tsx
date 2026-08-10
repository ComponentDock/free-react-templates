const products = [
  {
    name: 'Smooth Cloth',
    oldPrice: '$46.00',
    price: '$28.00',
    image: 'https://picsum.photos/seed/bazaar-rated-1/600/600',
  },
  {
    name: 'Blue Shoe High Heels',
    oldPrice: '$46.00',
    price: '$28.00',
    image: 'https://picsum.photos/seed/bazaar-rated-2/600/600',
  },
  {
    name: 'Denim Jacket',
    oldPrice: '$46.00',
    price: '$28.00',
    image: 'https://picsum.photos/seed/bazaar-rated-3/600/600',
  },
  {
    name: 'Leather Green Bag',
    oldPrice: '$46.00',
    price: '$28.00',
    image: 'https://picsum.photos/seed/bazaar-rated-4/600/600',
  },
  {
    name: 'Yellow Jacket',
    oldPrice: '$58.00',
    price: '$28.00',
    image: 'https://picsum.photos/seed/bazaar-rated-5/600/600',
  },
] as const

export function MostRated() {
  return (
    <section className="bg-cloud py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-10 font-sans text-2xl font-bold uppercase tracking-wide text-ink lg:text-3xl dark:text-white">
          Most Rated
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <a
              key={product.name}
              href="#shop"
              className="group block overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="px-3 py-4">
                <h3 className="font-sans text-sm font-semibold text-ink dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm">
                  <span className="mr-1 text-mist line-through">{product.oldPrice}</span>
                  <span className="font-bold text-brand">{product.price}</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
