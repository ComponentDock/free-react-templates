import { BRAND_LOGOS } from '../data'

/* .brand-area — a row of five partner logo marks (text wordmarks in the
   recreation, matching the original's b1.png…b5.png strip). */
export function BrandStrip() {
  return (
    <section className="bg-white pb-[150px] pt-[60px]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4">
        {BRAND_LOGOS.map((logo) => (
          <span
            key={logo}
            className="font-display text-2xl font-semibold text-ink/30 transition-colors hover:text-ink/60"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  )
}
