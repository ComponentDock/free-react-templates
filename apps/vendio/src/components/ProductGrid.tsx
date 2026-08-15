import { products, productsLabel } from '../data'
import { cn } from '@free-react-templates/ui'

const badgeColors = {
  NEW: 'bg-price',
  SALE: 'bg-accent',
  HOT: 'bg-ink',
} as const

export function ProductGrid() {
  return (
    <section
      id="products-section"
      aria-label={productsLabel}
      className="scroll-mt-[70px] bg-white py-[99px]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="aspect-square w-full object-cover"
                />
                {product.badge && (
                  <span
                    className={cn(
                      'absolute left-14 top-0 origin-top-left rotate-90 px-2 py-1 text-base font-medium text-white',
                      badgeColors[product.badge],
                    )}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="pb-[38px] pt-9">
                <h3 className="text-lg font-medium text-ink transition-colors group-hover:text-accent">
                  {product.name}
                </h3>
                <p className="mt-1 text-base font-medium text-price">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
