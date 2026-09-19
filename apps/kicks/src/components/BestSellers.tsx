import { cn } from '@free-react-templates/ui'

interface Product {
  id: number
  name: string
  price: string
  image: string
}

const products: Product[] = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Running Shoes ${i + 1}`,
  price: '$139.00',
  image: `https://picsum.photos/seed/kicks-product-${i + 1}/300/300`,
}))

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-gray-100 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-sm font-medium text-body text-center">{product.name}</h3>
      <p className="text-sm text-brand-500 text-center font-medium mt-1">{product.price}</p>
    </article>
  )
}

export function BestSellers() {
  return (
    <section className="py-12 md:py-16 bg-white" aria-label="Best sellers">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-body font-bold mb-10">
          Best Sellers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#shop"
            className={cn(
              'inline-block px-8 py-3 bg-brand-500 text-white font-medium text-sm',
              'hover:bg-brand-600 transition-colors rounded-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
            )}
          >
            Shop All Products
          </a>
        </div>
      </div>
    </section>
  )
}
