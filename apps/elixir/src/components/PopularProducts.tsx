interface Product {
  name: string
  price: string
  originalPrice?: string
  onSale?: boolean
  seed: string
}

const products: ReadonlyArray<Product> = [
  {
    name: 'Bioderma',
    price: '$55.00',
    originalPrice: '$95.00',
    onSale: true,
    seed: 'elixir-prod-1',
  },
  { name: 'Chanca Piedra', price: '$70.00', seed: 'elixir-prod-2' },
  { name: 'Umcka Cold Care', price: '$120.00', seed: 'elixir-prod-3' },
  {
    name: 'Cetyl Pure',
    price: '$20.00',
    originalPrice: '$45.00',
    onSale: true,
    seed: 'elixir-prod-4',
  },
  { name: 'CLA Core', price: '$38.00', seed: 'elixir-prod-5' },
  {
    name: 'Poo Pourri',
    price: '$38.00',
    originalPrice: '$89.00',
    onSale: true,
    seed: 'elixir-prod-6',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="text-center">
      <div className="relative">
        {product.onSale && (
          <span className="absolute left-2 top-2 rounded bg-brand px-3 py-1 text-xs font-bold uppercase text-white">
            Sale
          </span>
        )}
        <img
          src={`https://picsum.photos/seed/${product.seed}/400/400`}
          alt={product.name}
          className="mx-auto mb-4 h-48 w-48 object-contain"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold text-ink">
        <a href="#product" className="hover:text-brand">
          {product.name}
        </a>
      </h3>
      <p className="mt-1 text-sm text-mist">
        {product.originalPrice && <del className="mr-2">{product.originalPrice}</del>}
        {product.price}
      </p>
    </div>
  )
}

export function PopularProducts() {
  return (
    <section id="products" className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold uppercase tracking-wide text-ink">
          Popular Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#all-products"
            className="inline-block rounded border-2 border-brand bg-brand px-10 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-brand"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
