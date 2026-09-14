import { ShoppingCart, Eye, Heart, BarChart3 } from 'lucide-react'

type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  tag: 'New' | 'Sale'
  image: string
}

const products: Product[] = [
  {
    id: 9,
    name: 'Floral Dress',
    price: 199,
    originalPrice: 300,
    tag: 'Sale',
    image: 'https://picsum.photos/seed/bazaar-prod9/400/500',
  },
  {
    id: 10,
    name: 'Floral Dress',
    price: 300,
    tag: 'New',
    image: 'https://picsum.photos/seed/bazaar-prod10/400/500',
  },
  {
    id: 11,
    name: 'Floral Dress',
    price: 300,
    tag: 'New',
    image: 'https://picsum.photos/seed/bazaar-prod11/400/500',
  },
  {
    id: 12,
    name: 'Floral Dress',
    price: 300,
    tag: 'New',
    image: 'https://picsum.photos/seed/bazaar-prod12/400/500',
  },
  {
    id: 13,
    name: 'Floral Dress',
    price: 300,
    tag: 'New',
    image: 'https://picsum.photos/seed/bazaar-prod13/400/500',
  },
  {
    id: 14,
    name: 'Floral Dress',
    price: 300,
    tag: 'New',
    image: 'https://picsum.photos/seed/bazaar-prod14/400/500',
  },
  {
    id: 15,
    name: 'Floral Dress',
    price: 300,
    tag: 'New',
    image: 'https://picsum.photos/seed/bazaar-prod15/400/500',
  },
  {
    id: 16,
    name: 'Floral Dress',
    price: 300,
    tag: 'New',
    image: 'https://picsum.photos/seed/bazaar-prod16/400/500',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group text-center">
      <div
        className="relative mb-3 overflow-hidden rounded bg-cover bg-center pt-[120%]"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <span className="absolute left-2 top-2 z-10 rounded bg-brand px-2 py-1 text-xs font-bold uppercase text-ink">
          {product.tag}
        </span>
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
          <button
            type="button"
            className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={16} />
          </button>
          <button
            type="button"
            className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand"
            aria-label={`View ${product.name} details`}
          >
            <Eye size={16} />
          </button>
          <button
            type="button"
            className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand"
            aria-label={`Add ${product.name} to wishlist`}
          >
            <Heart size={16} />
          </button>
          <button
            type="button"
            className="rounded-full bg-white p-2 text-ink shadow transition-colors hover:bg-brand"
            aria-label={`Compare ${product.name}`}
          >
            <BarChart3 size={16} />
          </button>
        </div>
      </div>
      <h3 className="text-sm font-medium text-body">{product.name}</h3>
      <p className="mt-1 text-sm">
        <span className="font-bold text-brand">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="ml-2 text-mist line-through">${product.originalPrice.toFixed(2)}</span>
        )}
      </p>
    </div>
  )
}

export function OurProducts() {
  return (
    <section className="py-16" aria-label="Our products">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">
            <span className="border-b-2 border-brand pb-1">Our Products</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist">
            We love to tell our successful far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
