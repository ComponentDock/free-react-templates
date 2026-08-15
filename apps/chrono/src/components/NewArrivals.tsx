import { arrivalsProducts, arrivalsTitle } from '../data'

export function NewArrivals() {
  return (
    <section id="arrivals-section" className="bg-paper py-20">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <h2 className="mb-14 font-sans text-5xl font-bold leading-none text-black">
          {arrivalsTitle}
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {arrivalsProducts.map((product) => (
            <article key={product.name} className="group">
              <div className="overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[7/8] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-6 text-center">
                <h3 className="font-sans text-2xl font-bold text-[#444444]">
                  <a href="#arrivals-section" className="transition-colors hover:text-brand">
                    {product.name}
                  </a>
                </h3>
                <span className="mt-1 block font-sans text-lg font-medium text-brand">
                  {product.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
