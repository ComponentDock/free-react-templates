const trendingProducts = [
  {
    name: 'Cloud Soft Pillow',
    image: 'https://picsum.photos/seed/plumtrend1/400/400',
    price: '$5',
  },
  {
    name: 'Luxury Silk Pillow',
    image: 'https://picsum.photos/seed/plumtrend2/400/400',
    price: '$5',
  },
  {
    name: 'Eco Bamboo Pillow',
    image: 'https://picsum.photos/seed/plumtrend3/400/400',
    price: '$5',
  },
  {
    name: 'Neck Support Pillow',
    image: 'https://picsum.photos/seed/plumtrend4/400/400',
    price: '$5',
  },
  {
    name: 'Hypoallergenic Pillow',
    image: 'https://picsum.photos/seed/plumtrend5/400/400',
    price: '$5',
  },
  {
    name: 'Travel Size Pillow',
    image: 'https://picsum.photos/seed/plumtrend6/400/400',
    price: '$5',
  },
] as const

export function TrendingItems() {
  return (
    <section className="bg-light-purple">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold text-dark-purple sm:text-4xl">
          Trending Items
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trendingProducts.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold text-dark-purple">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-secondary-text">From {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
