import { Search, ShoppingCart, Heart } from 'lucide-react'

const products = [
  { name: 'Classic Blazer', category: 'Fashion', seed: 'frag-trend-1' },
  { name: 'Silk Scarf', category: 'Accessories', seed: 'frag-trend-2' },
  { name: 'Denim Jacket', category: 'Outerwear', seed: 'frag-trend-3' },
  { name: 'Leather Bag', category: 'Bags', seed: 'frag-trend-4' },
  { name: 'Wool Cardigan', category: 'Knitwear', seed: 'frag-trend-5' },
  { name: 'Linen Shirt', category: 'Shirts', seed: 'frag-trend-6' },
  { name: 'Cotton Trousers', category: 'Bottoms', seed: 'frag-trend-7' },
  { name: 'Suede Boots', category: 'Footwear', seed: 'frag-trend-8' },
]

function ProductCard({ name, category, seed }: { name: string; category: string; seed: string }) {
  return (
    <div className="group rounded-lg bg-white shadow-sm">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={`https://picsum.photos/seed/${seed}/300/300`}
          alt={name}
          className="h-[260px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-brand-light/90 py-3 transition-transform duration-300 group-hover:translate-y-0">
          <button
            aria-label={`Search ${name}`}
            className="rounded-full bg-white p-2 text-brand hover:bg-brand hover:text-white"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label={`Add ${name} to cart`}
            className="rounded-full bg-white p-2 text-brand hover:bg-brand hover:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button
            aria-label={`Add ${name} to wishlist`}
            className="rounded-full bg-white p-2 text-brand hover:bg-brand hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <span className="text-xs uppercase tracking-wider text-muted">{category}</span>
        <h3 className="mt-1 font-heading text-base font-semibold text-body">{name}</h3>
        <p className="mt-1 text-sm font-medium text-brand">$150.00</p>
      </div>
    </div>
  )
}

export { ProductCard }

export function TrendingProducts() {
  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-body">
          Trending Product
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.seed} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
