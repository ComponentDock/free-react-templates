import { ProductCard } from './ProductCard'

const PRODUCTS = [
  {
    name: 'Modern Chair',
    price: 'From $180',
    image: 'https://picsum.photos/seed/stockroom-1/600/600',
  },
  {
    name: 'Minimalistic Plant Pot',
    price: 'From $180',
    image: 'https://picsum.photos/seed/stockroom-2/600/600',
  },
  {
    name: 'Modern Chair',
    price: 'From $180',
    image: 'https://picsum.photos/seed/stockroom-3/600/600',
  },
  {
    name: 'Night Stand',
    price: 'From $180',
    image: 'https://picsum.photos/seed/stockroom-4/600/600',
  },
  { name: 'Plant Pot', price: 'From $18', image: 'https://picsum.photos/seed/stockroom-5/600/600' },
  {
    name: 'Small Table',
    price: 'From $320',
    image: 'https://picsum.photos/seed/stockroom-6/600/600',
  },
  {
    name: 'Metallic Chair',
    price: 'From $318',
    image: 'https://picsum.photos/seed/stockroom-7/600/600',
  },
  {
    name: 'Modern Rocking Chair',
    price: 'From $318',
    image: 'https://picsum.photos/seed/stockroom-8/600/600',
  },
  {
    name: 'Home Deco',
    price: 'From $318',
    image: 'https://picsum.photos/seed/stockroom-9/600/600',
  },
]

export function ProductGrid() {
  return (
    <section className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.name + product.image}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </section>
  )
}
