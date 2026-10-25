import { useState } from 'react'
import { products } from '../data'

/** Four square-cornered product cards; adding one confirms inline, offline. */
export function Shop() {
  const [added, setAdded] = useState('')

  return (
    <section id="shop" aria-label="Shop" className="bg-white pb-[100px]">
      <div className="mx-auto max-w-[1140px] px-6">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id}>
              <img
                src={`https://picsum.photos/seed/${product.seed}/400/623?grayscale`}
                alt={product.name}
                loading="lazy"
                className="mb-[40px] aspect-[264/411] w-full object-cover"
              />
              <h3 className="mb-2 text-[26px] font-normal text-ink md:text-[30px]">
                {product.name}
              </h3>
              <p className="mb-5 text-[16px] text-body italic">{product.price}</p>
              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                onClick={() => setAdded(product.name)}
                className="min-w-[130px] bg-ink px-[11px] py-[11px] text-[16px] text-white transition-colors hover:bg-popup"
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>

        <p role="status" aria-live="polite" className="mt-8 text-[16px] text-body">
          {added === '' ? '' : `${added} added to your bag.`}
        </p>
      </div>
    </section>
  )
}
