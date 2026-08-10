import { cn } from '@free-react-templates/ui'

export interface Product {
  name: string
  price: number
  salePrice?: number
  discount?: string
}

export const trendingProducts: Product[] = [
  { name: 'Young Woman Wearing Dress', price: 120 },
  { name: 'Young Woman Wearing Dress', price: 120, salePrice: 80, discount: '30%' },
  { name: 'Young Woman Wearing Dress', price: 120 },
  { name: 'Young Woman Wearing Dress', price: 120 },
  { name: 'Young Woman Wearing Dress', price: 120, salePrice: 80, discount: '30%' },
  { name: 'Young Woman Wearing Dress', price: 120 },
]

export function Trending() {
  return (
    <section id="shop" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-wide text-ink dark:text-white">
          Trending
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {trendingProducts.map((product, index) => (
            <article key={index} className="group">
              <div className="relative overflow-hidden bg-cream dark:bg-gray-900">
                <img
                  src={`https://picsum.photos/seed/couture-${index + 2}/600/750`}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-80"
                />
                {product.discount && (
                  <span
                    className={cn(
                      'absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold text-white',
                      'bg-brand',
                    )}
                  >
                    {product.discount}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-sm uppercase tracking-wide text-ink dark:text-white">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-mist">
                {product.salePrice !== undefined ? (
                  <>
                    <span className="mr-2 line-through">${product.price}.00</span>
                    <span className="font-semibold text-ink dark:text-white">
                      ${product.salePrice}.00
                    </span>
                  </>
                ) : (
                  <span className="font-semibold">${product.price}.00</span>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
