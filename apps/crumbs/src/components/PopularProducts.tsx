import { Button } from '@free-react-templates/ui'

const products = [
  {
    name: 'Chocolate',
    description: 'Rich, decadent chocolate layers with a smooth ganache finish.',
    price: '$20',
    image: 'https://picsum.photos/seed/crumbs-choc/400/300',
  },
  {
    name: 'Sweetheart',
    description: 'Delicate vanilla sponge with rose-infused buttercream frosting.',
    price: '$20',
    image: 'https://picsum.photos/seed/crumbs-sweet/400/300',
  },
  {
    name: 'Blackforest',
    description: 'Classic blackforest with layers of cherry compote and cream.',
    price: '$20',
    image: 'https://picsum.photos/seed/crumbs-forest/400/300',
  },
]

export function PopularProducts() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="font-dm-sans text-sm uppercase tracking-[0.2em] text-orange-600">
            Most Popular
          </span>
          <h2 className="mt-3 font-quicksand text-3xl font-bold text-gray-900 md:text-4xl">
            Our Exclusive Cakes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-br-[60px] bg-[#FFF5F2] text-center transition-transform hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-6 py-6">
                <h3 className="mb-3 font-quicksand text-xl font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="mb-4 px-4 text-sm text-gray-600">{product.description}</p>
                <Button className="rounded-full bg-orange-600 px-6 py-2 font-quicksand text-sm font-semibold text-white shadow-md shadow-orange-600/27 transition-transform hover:-translate-y-1 hover:bg-orange-700">
                  {product.price} | Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
