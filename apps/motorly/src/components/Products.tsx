import { ShoppingCart } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const products = [
  { name: 'High Flow Fuel', seed: 'motorly-3' },
  { name: 'Revolution Wheels', seed: 'motorly-4' },
  { name: 'Tone Interior Kit', seed: 'motorly-5' },
  { name: 'Matte Gunmetal', seed: 'motorly-6' },
] as const

export function Products() {
  return (
    <section id="shop" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist dark:text-white/60">
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl bg-paper transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${product.seed}/480/360`}
                alt={product.name}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-xl font-bold text-brand">$800.00</p>
                <Button
                  className="mt-4 w-full rounded bg-brand text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
                  size="md"
                >
                  <ShoppingCart className="h-4 w-4" aria-hidden="true" /> +Add To Cart
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
