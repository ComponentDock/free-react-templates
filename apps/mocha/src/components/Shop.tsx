import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

type Product = {
  name: string
  price: string
  description: string
  badge?: string
  image: string
}

const products: Product[] = [
  {
    name: 'House Blend',
    price: '$18.00',
    description: 'Our signature blend with notes of chocolate, caramel, and toasted nuts',
    badge: 'Bestseller',
    image: 'https://picsum.photos/seed/mocha-shop-1/400/300',
  },
  {
    name: 'Single Origin - Ethiopia',
    price: '$22.00',
    description: 'Light roast with bright citrus and floral notes',
    image: 'https://picsum.photos/seed/mocha-shop-2/400/300',
  },
  {
    name: 'Decaf Blend',
    price: '$19.00',
    description: 'All the flavor, none of the buzz',
    image: 'https://picsum.photos/seed/mocha-shop-3/400/300',
  },
]

export function Shop() {
  return (
    <section id="shop" className="scroll-mt-20 bg-primary-900 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Take It Home
          </h2>
          <p className="mt-4 text-lg text-primary-200">
            Fresh-roasted beans delivered to your door
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-bold">{product.name}</h3>
                  {product.badge && (
                    <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-medium text-gray-900">
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-primary-200">
                  {product.description}
                </p>
                <div className="mt-4 flex items-baseline justify-between">
                  <p className="font-display text-2xl font-bold">
                    {product.price}
                    <span className="ml-1 text-sm font-normal text-primary-300">/ 12oz bag</span>
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    className="rounded-full bg-amber-400 text-gray-900 hover:bg-amber-300"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 font-medium text-primary-200 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Shop All Coffee
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
