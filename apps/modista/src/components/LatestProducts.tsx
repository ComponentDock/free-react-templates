import { ArrowRightLeft, Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Down Jacket',
    price: 120,
    oldPrice: 150,
    image: 'https://picsum.photos/seed/modista-prod1/400/500',
  },
  {
    id: 2,
    name: 'Casual Hoodie',
    price: 80,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-prod2/400/500',
  },
  {
    id: 3,
    name: 'Denim Jeans',
    price: 95,
    oldPrice: 120,
    image: 'https://picsum.photos/seed/modista-prod3/400/500',
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 65,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-prod4/400/500',
  },
  {
    id: 5,
    name: 'Leather Jacket',
    price: 200,
    oldPrice: 250,
    image: 'https://picsum.photos/seed/modista-prod5/400/500',
  },
  {
    id: 6,
    name: 'Sport Shoes',
    price: 110,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-prod6/400/500',
  },
  {
    id: 7,
    name: 'Wool Sweater',
    price: 75,
    oldPrice: 90,
    image: 'https://picsum.photos/seed/modista-prod7/400/500',
  },
  {
    id: 8,
    name: 'Designer Bag',
    price: 180,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-prod8/400/500',
  },
] as const

export function LatestProducts() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-10" aria-label="Latest products">
      <h2 className="mb-8 text-center font-heading text-2xl font-bold uppercase tracking-wide text-text-heading">
        Our Latest Product
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
        {products.map((product) => (
          <div key={product.id} className="min-w-[220px] shrink-0">
            <div className="group relative overflow-hidden border border-border-light">
              <img
                src={product.image}
                alt={product.name}
                className="h-[280px] w-full object-cover"
              />
              {/* Hover actions */}
              <div className="absolute bottom-0 left-0 right-0 flex translate-y-full justify-center gap-2 bg-white/90 py-2 transition-transform group-hover:translate-y-0">
                <button
                  type="button"
                  aria-label="Compare"
                  className="text-text-secondary hover:text-brand-red"
                >
                  <ArrowRightLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Wishlist"
                  className="text-text-secondary hover:text-brand-red"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
            </div>
            <button
              type="button"
              className="mt-3 w-full border border-brand-dark bg-brand-dark py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-transparent hover:text-brand-dark"
            >
              Add To Cart
            </button>
            <h3 className="mt-2 text-sm font-medium text-text-heading">{product.name}</h3>
            <p className="text-sm text-text-secondary">
              {product.oldPrice && (
                <span className="mr-2 text-text-muted line-through">${product.oldPrice}</span>
              )}
              <span className="font-semibold text-text-primary">${product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
