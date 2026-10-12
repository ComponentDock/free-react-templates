/** Own placeholder marks for the logo strip — no borrowed brand artwork. */
const BRANDS = ['Northwind', 'Kite', 'Lumen', 'Arbor', 'Tessellate', 'Mono', 'Vertex'] as const

/**
 * The bordered logo strip under the testimonials: seven muted text marks, evenly
 * spaced, standing in for the reference's partner logos.
 */
export function BrandStrip() {
  return (
    <section id="brands" aria-label="Trusted by" className="bg-surface">
      <div className="border-y border-line pt-[50px] pb-[40px]">
        <ul className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-x-10 gap-y-6 px-5">
          {BRANDS.map((brand) => (
            <li
              key={brand}
              className="font-heading text-xl font-medium tracking-[0.2em] text-copy-soft uppercase"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
