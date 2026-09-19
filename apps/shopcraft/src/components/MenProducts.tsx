import { Heart, Layers, ShoppingCart, Maximize2 } from 'lucide-react'

const menProducts = [
  { name: 'Long Sleeve Shirt', price: '$150.00', image: 'shopcraft-men-1' },
  { name: 'Chiffon Dress', price: '$150.00', image: 'shopcraft-men-2' },
  { name: 'Summer Dress', price: '$150.00', image: 'shopcraft-men-3' },
  { name: 'Casual Dress', price: '$150.00', image: 'shopcraft-men-4' },
]

const actions = [
  { icon: Heart, label: 'Add to wishlist' },
  { icon: Layers, label: 'Compare' },
  { icon: ShoppingCart, label: 'Add to cart' },
  { icon: Maximize2, label: 'Quick view' },
]

export function MenProducts() {
  return (
    <section id="men" className="relative bg-black/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-white">New realeased Products for Men</h2>
          <p className="mt-2 text-gray-300">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menProducts.map((product) => (
            <div key={product.name} className="group text-center">
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${product.image}/400/500`}
                  alt={product.name}
                  className="h-80 w-full object-cover transition-transform group-hover:scale-105"
                  width={400}
                  height={500}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                  <div className="flex gap-4">
                    {actions.map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        aria-label={label}
                        className="text-white hover:text-brand"
                      >
                        <Icon className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                <p className="text-lg font-bold text-white">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
