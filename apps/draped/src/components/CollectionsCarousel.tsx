import { ProductCard } from './ProductCard'

const collectionProducts = [
  {
    image: 'https://picsum.photos/seed/draped-col1/400/400',
    title: 'The Shoe',
    collection: 'Summer Collection',
    price: '$9.50',
  },
  {
    image: 'https://picsum.photos/seed/draped-col2/400/400',
    title: 'Marc Jacobs Bag',
    collection: 'Summer Collection',
    price: '$9.50',
    originalPrice: '$30.00',
    sale: true,
  },
  {
    image: 'https://picsum.photos/seed/draped-col3/400/400',
    title: 'The Belt',
    collection: 'Summer Collection',
    price: '$9.50',
  },
  {
    image: 'https://picsum.photos/seed/draped-col4/400/400',
    title: 'Summer Dress',
    collection: 'Summer Collection',
    price: '$12.00',
  },
  {
    image: 'https://picsum.photos/seed/draped-col5/400/400',
    title: 'Linen Jacket',
    collection: 'Summer Collection',
    price: '$15.00',
  },
  {
    image: 'https://picsum.photos/seed/draped-col6/400/400',
    title: 'Canvas Tote',
    collection: 'Summer Collection',
    price: '$8.50',
  },
]

export function CollectionsCarousel() {
  return (
    <section id="collection" className="bg-white transition-colors dark:bg-charcoal-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Collections</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {collectionProducts.map((product) => (
            <div key={product.title} className="w-64 flex-shrink-0 snap-start">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
