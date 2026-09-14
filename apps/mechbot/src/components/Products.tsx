import { ShoppingCart } from 'lucide-react'

const products = [
  {
    name: 'Mechbot Alpha',
    price: '$299',
    description: 'Entry-level robotic arm with 4 degrees of freedom and visual programming.',
    image: 'https://picsum.photos/seed/mechbot-prod1/400/300',
  },
  {
    name: 'Mechbot Pro',
    price: '$599',
    description: 'Professional 6-axis robot with machine learning vision and real-time control.',
    image: 'https://picsum.photos/seed/mechbot-prod2/400/300',
  },
  {
    name: 'Mechbot Rover',
    price: '$449',
    description: 'Autonomous mobile platform with LiDAR navigation and modular payload bay.',
    image: 'https://picsum.photos/seed/mechbot-prod3/400/300',
  },
]

export function Products() {
  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            From beginner kits to professional-grade platforms, Mechbot has the right robot for
            every mission.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-surface shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-heading">{product.name}</h3>
                  <span className="text-lg font-bold text-brand">{product.price}</span>
                </div>
                <p className="mt-2 text-sm text-body">{product.description}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
