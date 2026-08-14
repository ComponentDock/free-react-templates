import { PRODUCTS } from '../data'

/* block-3 — light-gray band with the centered "Featured Products" heading
   (violet 40×2px top bar) and a horizontally scrollable row of five white
   product cards (name, tagline, violet bold price). */
export function FeaturedProducts() {
  return (
    <section id="shop" className="bg-band py-[40px] md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="relative inline-block pt-3 text-[30px] font-light text-ink">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-0 h-[2px] w-10 -translate-x-1/2 bg-brand"
            />
            Featured Products
          </h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {PRODUCTS.map((product) => (
            <article
              key={`${product.name}-${product.image}`}
              className="min-w-[220px] flex-1 bg-white text-center shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)]"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-[20px] font-light text-ink">
                  <a href="#shop" className="transition-colors hover:text-brand">
                    {product.name}
                  </a>
                </h3>
                <p className="mb-0 mt-1 text-[14px] font-light text-body">{product.tagline}</p>
                <p className="mt-1 text-[18px] font-bold text-brand">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
