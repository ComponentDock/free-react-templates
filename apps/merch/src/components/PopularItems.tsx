import { ProductCard } from './ProductCard'

const popularProducts = [
  {
    name: 'Kiko Linen Slip Dress',
    price: 89.99,
    image: 'https://picsum.photos/seed/merch-pop-1/400/400',
  },
  {
    name: 'Sleeve Dress, White',
    price: 65.0,
    image: 'https://picsum.photos/seed/merch-pop-2/400/400',
    badge: 'new' as const,
  },
  {
    name: 'Hodina Watch',
    price: 199.0,
    originalPrice: 249.0,
    image: 'https://picsum.photos/seed/merch-pop-3/400/400',
    badge: 'sale' as const,
  },
  {
    name: 'Triangle Low White-Black',
    price: 79.99,
    image: 'https://picsum.photos/seed/merch-pop-4/400/400',
  },
  {
    name: 'Kid Dress, White',
    price: 45.0,
    image: 'https://picsum.photos/seed/merch-pop-5/400/400',
    badge: 'new' as const,
  },
  {
    name: 'Lady Shoes, Brown',
    price: 119.99,
    originalPrice: 159.99,
    image: 'https://picsum.photos/seed/merch-pop-6/400/400',
    badge: 'sale' as const,
  },
] as const

export function PopularItems() {
  return (
    <section id="popular" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-ink">
          Popular Items
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
