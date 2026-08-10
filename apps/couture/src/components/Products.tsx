export const products = [
  { name: 'Young Woman Wearing Dress', price: 120 },
  { name: 'Young Woman Wearing Dress', price: 120 },
  { name: 'Young Woman Wearing Dress', price: 120 },
  { name: 'Young Woman Wearing Dress', price: 120 },
] as const

export function Products() {
  return (
    <section className="bg-cream pb-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-wide text-ink dark:text-white">
          Our Products
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product, index) => (
            <article key={index}>
              <img
                src={`https://picsum.photos/seed/couture-${index + 10}/600/750`}
                alt={product.name}
                className="h-64 w-full object-cover md:h-72"
              />
              <h3 className="mt-4 font-display text-sm uppercase tracking-wide text-ink dark:text-white">
                {product.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-mist">${product.price}.00</p>
              <a
                href="#shop"
                className="mt-2 inline-block font-display text-xs uppercase tracking-widest text-ink underline-offset-4 transition-colors hover:text-brand hover:underline dark:text-white"
              >
                Add to cart
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
