import { products } from '../data'

export function ProductCatalog() {
  return (
    <section id="products" className="bg-navy-deep py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white">Featured Products</h2>
          <p className="text-white/60">Discover our premium smartwatch collection</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="overflow-hidden rounded-xl bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 text-center">
                <h3 className="mb-1 text-lg font-semibold text-body">{product.name}</h3>
                <p className="mb-4 text-sm font-medium text-brand">{product.price}</p>
                <a
                  href="#"
                  className="inline-block rounded-full bg-brand px-6 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
                >
                  Pre Order
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
