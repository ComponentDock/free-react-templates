import { ProductCard } from './ProductCard'

const latestProducts = [
  {
    name: 'Fitness Tracker',
    price: 44.99,
    image: 'https://picsum.photos/seed/wares-l1/300/300',
    rating: 4,
  },
  {
    name: 'Phone Case',
    price: 12.99,
    oldPrice: 19.99,
    image: 'https://picsum.photos/seed/wares-l2/300/300',
    rating: 3,
  },
  {
    name: 'Travel Mug',
    price: 18.99,
    image: 'https://picsum.photos/seed/wares-l3/300/300',
    rating: 5,
  },
  {
    name: 'Wireless Charger',
    price: 29.99,
    oldPrice: 39.99,
    image: 'https://picsum.photos/seed/wares-l4/300/300',
    rating: 4,
  },
]

export function LatestProducts() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold text-ink">Latest Products</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {latestProducts.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}
