import { ProductCard } from './ProductCard'

const products = [
  {
    image: 'https://picsum.photos/seed/draped-shoe/400/400',
    title: 'The Shoe',
    collection: 'Summer Collection',
    price: '$9.50',
  },
  {
    image: 'https://picsum.photos/seed/draped-bag/400/400',
    title: 'Marc Jacobs Bag',
    collection: 'Summer Collection',
    price: '$9.50',
    originalPrice: '$30.00',
    sale: true,
  },
  {
    image: 'https://picsum.photos/seed/draped-belt/400/400',
    title: 'The Belt',
    collection: 'Summer Collection',
    price: '$9.50',
  },
]

export function ProductGrid() {
  return (
    <section
      id="products"
      className="border-t border-gray-100 bg-gray-50 transition-colors dark:border-gray-700 dark:bg-charcoal-900"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
