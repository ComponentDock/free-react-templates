import { PRODUCTS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Shop — four product entries with 300px images, uppercase titles, orange
 * prices (the Dumbell shows a struck-through sale price), and a dark cart
 * bar revealed on hover with uppercase white links.
 */
export function Shop() {
  return (
    <section id="shop" aria-label="Shop" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Let's Shop"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div key={product.title} className="group text-center">
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/80 py-3 uppercase text-white transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex justify-center gap-4 text-xs">
                    <a href="#shop" className="hover:text-brand">
                      Add to Cart
                    </a>
                    <a href="#shop" className="hover:text-brand">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-sm uppercase">{product.title}</h3>
                <div className="mt-1 text-brand">
                  {product.salePrice && (
                    <span className="mr-2 text-neutral-400 line-through">{product.salePrice}</span>
                  )}
                  <span>{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
