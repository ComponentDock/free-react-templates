const products = [
  {
    name: 'Chocolate Delight',
    description: 'Rich dark chocolate layered cake with ganache frosting.',
    price: '$35.00',
    image: 'https://picsum.photos/seed/batterly-choco/400/300',
  },
  {
    name: 'Sweetheart',
    description: 'Strawberry cream cake with heart-shaped decorations.',
    price: '$42.00',
    image: 'https://picsum.photos/seed/batterly-sweet/400/300',
  },
  {
    name: 'Blackforest',
    description: 'Classic blackforest with cherries and whipped cream.',
    price: '$38.00',
    image: 'https://picsum.photos/seed/batterly-black/400/300',
  },
]

export function PopularItems() {
  return (
    <section id="product" className="bg-card-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
          Most Popular
        </p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Exclusive Cakes
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-br-[60px] bg-white shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-brand">{product.price}</span>
                  <a
                    href="#contact"
                    className="rounded-full bg-brand px-5 py-2 font-heading text-xs font-bold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
