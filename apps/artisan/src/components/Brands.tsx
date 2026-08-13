import { brands } from '../data'

/** White rounded card overlapping the hero's bottom edge with grayscale
 *  client wordmarks (brand palette note: the reference strip is white,
 *  radius 100px, pulled up -75px over the hero with a soft shadow). */
export function Brands() {
  return (
    <section aria-label="Brands" className="relative z-10 px-4">
      <div className="brand-wrap mx-auto -mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-6 rounded-full border border-black/10 bg-white px-6 py-16 shadow-[0_20px_50px_rgba(153,153,153,0.2)]">
        {brands.map((brand) => (
          <span
            key={brand}
            className="font-sans text-xl font-semibold text-ink opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
