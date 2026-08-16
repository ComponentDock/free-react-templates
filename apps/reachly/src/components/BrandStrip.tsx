import { brandNames } from '../data'

/* Brand strip (source: div.brand-area — slick carousel of SIX client logo
   images; recreated as six neutral text wordmarks in a row). */
export function BrandStrip() {
  return (
    <div className="pt-[50px] pb-[40px]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8 px-[15px]">
        {brandNames.map((name) => (
          <span
            key={name}
            className="font-heading text-xl font-bold tracking-wide text-gray-300 transition-colors hover:text-brand"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
