import { Eye, Heart, ShoppingCart } from 'lucide-react'

const smallProducts = [
  { name: 'Nike Latest Sneaker', price: '$25.00', oldPrice: '$35.00', seed: 'cartly-n1' },
  { name: 'Round Purse for Women', price: '$25.00', oldPrice: '$35.00', seed: 'cartly-n2' },
  { name: 'Men Stylist Wallet', price: '$25.00', oldPrice: '$35.00', seed: 'cartly-n3' },
]

export function NewProducts() {
  return (
    <section className="bg-white pb-16 pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-neutral-800">
            New Products
          </h2>
          <div className="mx-auto mt-4 h-px w-full bg-neutral-200" />
          <p className="mt-4 text-sm text-neutral-500">
            Bring called seed first of third give itself now ment
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Large featured product */}
          <div className="flex flex-col items-center bg-neutral-100 px-4 py-12 text-center">
            <p className="font-heading text-base font-medium uppercase text-neutral-500">
              Collection of 2024
            </p>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-neutral-800">
              Men's Summer T-Shirt
            </h3>
            <img
              src="https://picsum.photos/seed/cartly-big/500/500"
              alt="Men's Summer T-Shirt"
              className="my-8 max-h-80 w-full max-w-sm object-contain"
              loading="lazy"
            />
            <span className="text-3xl font-light text-neutral-600">$120.70</span>
            <button
              type="button"
              className="mt-4 rounded border border-lime-400 bg-lime-400 px-8 py-2 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-lime-400"
            >
              Add to Cart
            </button>
          </div>

          {/* 2×2 small product grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {smallProducts.map((p) => (
              <div key={p.name} className="text-center">
                <div className="group relative overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${p.seed}/300/300`}
                    alt={p.name}
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
                  <h4 className="font-heading text-sm uppercase text-neutral-600">{p.name}</h4>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-heading text-lg font-medium text-neutral-800">
                      {p.price}
                    </span>
                    <del className="text-sm font-light text-neutral-400">{p.oldPrice}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
