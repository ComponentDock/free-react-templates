import { GitCompare, Heart, ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Winter Jacket',
    price: 120,
    originalPrice: null,
    image: 'https://picsum.photos/seed/modista-p1/300/350',
  },
  {
    id: 2,
    name: 'Summer Dress',
    price: 89,
    originalPrice: 120,
    image: 'https://picsum.photos/seed/modista-p2/300/350',
  },
  {
    id: 3,
    name: 'Casual Blazer',
    price: 199,
    originalPrice: null,
    image: 'https://picsum.photos/seed/modista-p3/300/350',
  },
  {
    id: 4,
    name: 'Slim Jeans',
    price: 65,
    originalPrice: 85,
    image: 'https://picsum.photos/seed/modista-p4/300/350',
  },
  {
    id: 5,
    name: 'Leather Boots',
    price: 150,
    originalPrice: null,
    image: 'https://picsum.photos/seed/modista-p5/300/350',
  },
  {
    id: 6,
    name: 'Cotton Hoodie',
    price: 55,
    originalPrice: null,
    image: 'https://picsum.photos/seed/modista-p6/300/350',
  },
  {
    id: 7,
    name: 'Silk Scarf',
    price: 45,
    originalPrice: 60,
    image: 'https://picsum.photos/seed/modista-p7/300/350',
  },
  {
    id: 8,
    name: 'Denim Jacket',
    price: 130,
    originalPrice: null,
    image: 'https://picsum.photos/seed/modista-p8/300/350',
  },
] as const

export function LatestProducts() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-12" aria-label="Latest products">
      <h2 className="mb-8 text-center font-heading text-2xl font-bold uppercase tracking-wide text-text-heading">
        Our Latest Product
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-4" role="list">
        {products.map((product) => (
          <div key={product.id} className="min-w-[220px] flex-shrink-0" role="listitem">
            <div className="group relative overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-[280px] w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center gap-3 bg-black/0 pb-4 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <button
                  aria-label={`Compare ${product.name}`}
                  className="bg-white p-2 text-text-heading hover:bg-brand-red hover:text-white transition-colors"
                >
                  <GitCompare className="h-4 w-4" />
                </button>
                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="bg-white p-2 text-text-heading hover:bg-brand-red hover:text-white transition-colors"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <button className="w-full bg-brand-dark py-2 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-brand-dark border border-brand-dark">
                <ShoppingCart className="mr-2 inline h-4 w-4" />
                Add To Cart
              </button>
            </div>
            <h3 className="mt-3 text-sm font-medium text-text-primary">{product.name}</h3>
            <div className="mt-1">
              {product.originalPrice ? (
                <span className="text-sm">
                  <span className="text-text-muted line-through">${product.originalPrice}</span>
                  <span className="ml-2 text-text-secondary">${product.price}</span>
                </span>
              ) : (
                <span className="text-sm text-text-secondary">${product.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
