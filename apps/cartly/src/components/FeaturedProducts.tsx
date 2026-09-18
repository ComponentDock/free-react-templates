import { Eye, Heart, ShoppingCart } from 'lucide-react'

const products = [
  { name: "Latest Men's Sneaker", price: '$25.00', oldPrice: '$35.00', seed: 'cartly-p1' },
  { name: 'Red Women Purses', price: '$25.00', oldPrice: '$35.00', seed: 'cartly-p2' },
  { name: 'Men Stylist Smart Watch', price: '$25.00', oldPrice: '$35.00', seed: 'cartly-p3' },
]

function ProductCard({
  name,
  price,
  oldPrice,
  seed,
}: {
  name: string
  price: string
  oldPrice: string
  seed: string
}) {
  return (
    <div className="text-center">
      <div className="group relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${seed}/400/400`}
          alt={name}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 bg-lime-400/60 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {[
            { Icon: Eye, label: 'Quick view' },
            { Icon: Heart, label: 'Add to wishlist' },
            { Icon: ShoppingCart, label: 'Add to cart' },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-700 transition-colors hover:bg-lime-400 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border border-neutral-100 p-4 text-left">
        <h4 className="font-heading text-sm uppercase text-neutral-600">{name}</h4>
        <div className="mt-2 flex items-center gap-3">
          <span className="font-heading text-lg font-medium text-neutral-800">{price}</span>
          <del className="text-sm font-light text-neutral-400">{oldPrice}</del>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProducts() {
  return (
    <section id="featured" className="bg-white pb-16 pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-neutral-800">
            Featured Product
          </h2>
          <div className="mx-auto mt-4 h-px w-full bg-neutral-200" />
          <p className="mt-4 text-sm text-neutral-500">
            Bring called seed first of third give itself now ment
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
