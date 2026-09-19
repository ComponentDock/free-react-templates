import { ProductCard } from './ProductCard'

const newProducts = [
  {
    name: 'Wireless Headphones',
    price: 49.99,
    oldPrice: 69.99,
    image: 'https://picsum.photos/seed/wares-p1/300/300',
    rating: 5,
  },
  {
    name: 'Smart Watch',
    price: 129.99,
    oldPrice: 179.99,
    image: 'https://picsum.photos/seed/wares-p2/300/300',
    rating: 4,
  },
  {
    name: 'Running Shoes',
    price: 89.99,
    image: 'https://picsum.photos/seed/wares-p3/300/300',
    rating: 4,
  },
  {
    name: 'Leather Backpack',
    price: 59.99,
    oldPrice: 79.99,
    image: 'https://picsum.photos/seed/wares-p4/300/300',
    rating: 5,
  },
  {
    name: 'Sunglasses',
    price: 34.99,
    image: 'https://picsum.photos/seed/wares-p5/300/300',
    rating: 3,
  },
]

export function ProductSlider() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold text-ink">
        New Product <span className="text-brand">Collection</span>
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {newProducts.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}
