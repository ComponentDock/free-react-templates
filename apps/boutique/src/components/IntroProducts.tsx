import { addToCartLabel, introProducts, introSubtitle, introTitle } from '../data'

export function IntroProducts() {
  return (
    <section className="bg-paper px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold uppercase text-ink">{introTitle}</h2>
        <p className="mt-3 text-lg font-medium text-muted">{introSubtitle}</p>
      </div>
      <ul className="mx-auto mt-14 flex max-w-7xl snap-x gap-8 overflow-x-auto px-6 pb-4">
        {introProducts.map((product) => (
          <li key={product.name} className="group w-64 shrink-0 snap-start">
            <figure className="relative overflow-hidden bg-surface">
              <img
                src={product.image}
                alt=""
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-ink px-2 py-1 text-xs font-bold uppercase text-white">
                  {product.badge}
                </span>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="text-lg font-semibold text-white">{product.name}</p>
                  <p className="mt-1 text-base text-white">{product.price}</p>
                  <a
                    href="#products-section"
                    className="mt-3 inline-block border border-white px-4 py-2 text-xs font-medium uppercase text-white transition-colors hover:bg-brand"
                  >
                    {addToCartLabel}
                  </a>
                </div>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
