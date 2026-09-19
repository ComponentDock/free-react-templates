import { ProductCard } from './ProductCard'

const pickedProducts = [
  {
    name: 'Desk Organizer',
    price: 22.99,
    image: 'https://picsum.photos/seed/wares-k1/300/300',
    rating: 4,
  },
  {
    name: 'Mechanical Keyboard',
    price: 79.99,
    oldPrice: 99.99,
    image: 'https://picsum.photos/seed/wares-k2/300/300',
    rating: 5,
  },
  {
    name: 'Mouse Pad XL',
    price: 15.99,
    image: 'https://picsum.photos/seed/wares-k3/300/300',
    rating: 4,
  },
  {
    name: 'Webcam HD',
    price: 49.99,
    oldPrice: 69.99,
    image: 'https://picsum.photos/seed/wares-k4/300/300',
    rating: 3,
  },
]

export function PickedForYou() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold text-ink">Picked For You</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {pickedProducts.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}
