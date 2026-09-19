import { Heart, ShoppingCart } from 'lucide-react'

interface Product {
  name: string
  price: string
  image: string
}

const products: Product[] = [
  {
    name: 'Georgia Helmet Pro',
    price: '$120.00',
    image: 'https://picsum.photos/seed/catalogly-p1/300/300',
  },
  {
    name: 'Speed Rider X1',
    price: '$95.00',
    image: 'https://picsum.photos/seed/catalogly-p2/300/300',
  },
  {
    name: 'Classic Touring Helm',
    price: '$85.00',
    image: 'https://picsum.photos/seed/catalogly-p3/300/300',
  },
  {
    name: 'SportShield Elite',
    price: '$150.00',
    image: 'https://picsum.photos/seed/catalogly-p4/300/300',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex-shrink-0 w-56 border border-border bg-white p-4 transition-shadow hover:shadow-md">
      <div className="relative mb-3 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-2 top-2 flex flex-col gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            aria-label="Add to wishlist"
            className="rounded-full bg-white p-1.5 shadow transition-colors hover:text-brand"
          >
            <Heart size={14} />
          </button>
          <button
            aria-label="Add to cart"
            className="rounded-full bg-white p-1.5 shadow transition-colors hover:text-brand"
          >
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
      <h4 className="text-sm font-medium text-heading">{product.name}</h4>
      <p className="mt-1 text-sm font-bold text-brand">{product.price}</p>
    </div>
  )
}

interface FeaturedProductsProps {
  title?: string
  subtitle?: string
}

export function FeaturedProducts({
  title = 'Featured Products',
  subtitle = 'Who are in extremely love with eco friendly system.',
}: FeaturedProductsProps) {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-2xl font-bold text-heading">{title}</h2>
        <p className="mb-8 text-sm text-ink">{subtitle}</p>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
