const products = [
  {
    subtitle: 'Started from $10',
    title: 'Orthopedic Memory Foam Pillow',
    image: 'https://picsum.photos/seed/plumfeat1/600/400',
    reversed: false,
  },
  {
    subtitle: 'Started from $10',
    title: 'Premium Feather-Down Pillow',
    image: 'https://picsum.photos/seed/plumfeat2/600/400',
    reversed: true,
  },
  {
    subtitle: 'Started from $10',
    title: 'Bamboo Cooling Pillow',
    image: 'https://picsum.photos/seed/plumfeat3/600/400',
    reversed: false,
  },
] as const

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6">
        {products.map((product) => (
          <div
            key={product.title}
            className={`grid items-center gap-8 md:grid-cols-2 ${
              product.reversed ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-lg object-cover shadow-md"
            />
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wide text-brand">
                {product.subtitle}
              </p>
              <h2 className="font-heading text-2xl font-bold text-dark-purple sm:text-3xl">
                {product.title}
              </h2>
              <a
                href="#products"
                className="inline-block rounded-[5px] border-2 border-dark-purple px-6 py-2 text-sm font-semibold text-dark-purple transition-colors hover:bg-dark-purple hover:text-white"
              >
                Explore Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
