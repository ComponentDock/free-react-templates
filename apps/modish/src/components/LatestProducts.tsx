import { Button, cn } from '@free-react-templates/ui'

interface Product {
  name: string
  price: number
  badge?: 'NEW' | 'SALE'
}

const products: Product[] = [
  { name: 'Flamboyant Pink Top', price: 35, badge: 'NEW' },
  { name: 'Black and White Stripes Dress', price: 35 },
  { name: 'Ivory Lace Blouse', price: 42 },
  { name: 'Vintage Denim Skirt', price: 38, badge: 'SALE' },
] as const

export function LatestProducts() {
  return (
    <section id="latest" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2em] text-coal dark:text-white">
          Latest Products
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-lg bg-fog transition-colors dark:bg-gray-900"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/modish-product-${index + 1}/400/500`}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <span
                    className={cn(
                      'absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white',
                      product.badge === 'SALE' ? 'bg-brand' : 'bg-coal',
                    )}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    size="sm"
                    aria-label={`Add ${product.name} to cart`}
                    className="rounded-full bg-brand px-6 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand-dark"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-coal dark:text-white">{product.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">${product.price}.00</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
