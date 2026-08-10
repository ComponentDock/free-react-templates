const products = [
  { name: 'Gray Shoe', price: '$58.00', image: 'https://picsum.photos/seed/bazaar-pop-1/600/600' },
  {
    name: 'Blue Shoe High Heels',
    price: '$46.00',
    image: 'https://picsum.photos/seed/bazaar-pop-2/600/600',
  },
  {
    name: 'Denim Jacket',
    price: '$28.00',
    image: 'https://picsum.photos/seed/bazaar-pop-3/600/600',
  },
  {
    name: 'Leather Green Bag',
    price: '$20.00',
    image: 'https://picsum.photos/seed/bazaar-pop-4/600/600',
  },
  {
    name: 'Smooth Cloth',
    price: '$46.00',
    image: 'https://picsum.photos/seed/bazaar-pop-5/600/600',
  },
  {
    name: 'Yellow Jacket',
    price: '$58.00',
    image: 'https://picsum.photos/seed/bazaar-pop-6/600/600',
  },
] as const

export function Popular() {
  return (
    <section id="shop" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-10 font-sans text-2xl font-bold uppercase tracking-wide text-ink lg:text-3xl dark:text-white">
          Popular Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.name}
              href="#shop"
              className="group block overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="flex items-center justify-between px-4 py-4">
                <h3 className="font-sans text-base font-semibold text-ink dark:text-white">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-mist">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
