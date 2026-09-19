import { Search, ShoppingCart, Heart } from 'lucide-react'

const sellers = [
  { name: 'Wool Overcoat', category: 'Outerwear', seed: 'frag-best-1' },
  { name: 'Pleated Skirt', category: 'Bottoms', seed: 'frag-best-2' },
  { name: 'Tote Bag', category: 'Bags', seed: 'frag-best-3' },
  { name: 'Knit Sweater', category: 'Knitwear', seed: 'frag-best-4' },
  { name: 'Lace Heels', category: 'Footwear', seed: 'frag-best-5' },
  { name: 'Corduroy Pants', category: 'Bottoms', seed: 'frag-best-6' },
  { name: 'Velvet Blazer', category: 'Fashion', seed: 'frag-best-7' },
  { name: 'Silk Tie', category: 'Accessories', seed: 'frag-best-8' },
]

function SellerCard({ name, category, seed }: { name: string; category: string; seed: string }) {
  return (
    <div className="min-w-[240px] flex-shrink-0 rounded-lg bg-white shadow-sm">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={`https://picsum.photos/seed/${seed}/300/300`}
          alt={name}
          className="h-[240px] w-full object-cover"
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

export function BestSellers() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-body">
          Best Sellers
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {sellers.map((s) => (
            <SellerCard key={s.seed} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
