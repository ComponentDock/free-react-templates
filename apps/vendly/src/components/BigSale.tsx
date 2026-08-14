import { BIG_SALE, IMAGES } from '../data'

/* block-8 — "Big Sale!" split: rounded image left; right-aligned heading,
   post-meta line (By Carl Smith • September 3, 2018), lorem and a violet
   Shop Now button. */
export function BigSale() {
  return (
    <section id="new-arrivals" className="py-[40px] md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-[30px] font-light text-ink">Big Sale!</h2>
        <div className="mt-8 grid items-center gap-8 md:mt-12 md:grid-cols-2">
          <img
            src={IMAGES.bigSale}
            alt="Big sale promotion"
            loading="lazy"
            className="w-full rounded-lg object-cover"
          />
          <div className="text-center md:pl-5 md:text-left">
            <h3 className="text-[26px] font-light leading-snug text-ink">
              <a href="#shop" className="transition-colors hover:text-brand">
                {BIG_SALE.heading}
              </a>
            </h3>
            <p className="mt-2 text-[14px] text-[#c4c7ce]">
              By <span className="text-ink">Carl Smith</span>
              <span aria-hidden="true" className="mx-[10px]">
                •
              </span>
              September 3, 2018
            </p>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-body">
              {BIG_SALE.blurb}
            </p>
            <a
              href="#shop"
              className="relative mt-5 inline-block bg-brand px-5 py-[10px] text-[14px] font-light uppercase tracking-[0.2em] text-white transition-all duration-200 hover:top-[-2px] hover:shadow-[0_5px_20px_-7px_rgba(0,0,0,0.9)]"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
