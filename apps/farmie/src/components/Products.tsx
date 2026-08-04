import { Flame } from 'lucide-react'

const products = [
  {
    name: 'Fresh Organic Strawberries',
    price: '$17.99',
    sale: null,
    seed: 'farmie-product-1',
  },
  {
    name: 'Farm Eggs (Dozen)',
    price: '$9.99',
    sale: null,
    seed: 'farmie-product-2',
  },
  {
    name: 'Organic Raw Honey',
    price: '$59.99',
    sale: null,
    seed: 'farmie-product-3',
  },
  {
    name: 'Heirloom Tomato Basket',
    price: '$19.99',
    sale: '$29.99',
    seed: 'farmie-product-4',
  },
] as const

export function Products() {
  return (
    <section id="products" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Our Product Are Highest Quality
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ name, price, sale, seed }) => (
            <article
              key={name}
              className="relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              {sale && (
                <span className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                  <Flame className="h-3 w-3" aria-hidden="true" />
                  Sale
                </span>
              )}
              <img
                src={`https://picsum.photos/seed/${seed}/480/360`}
                alt=""
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-base font-bold text-black dark:text-white">{name}</h3>
                <p className="mt-3 text-lg font-extrabold text-brand">
                  {sale && (
                    <span className="mr-2 text-sm font-normal text-gray-400 line-through">
                      {sale}
                    </span>
                  )}
                  {price}
                </p>
                <a
                  href="#products"
                  className="mt-5 inline-block rounded-full bg-night px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
                >
                  Go to Store
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
