import { adLabel, brandName, imgUrl } from '../data'

export function LogoStrip() {
  return (
    <div className="bg-white px-5 py-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <a
          href="#top"
          aria-label={brandName}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white"
          >
            L
          </span>
          <span className="text-2xl font-semibold text-heading">{brandName}</span>
        </a>
        <a
          href="#ad"
          aria-label={adLabel}
          className="hidden h-[90px] w-[728px] max-w-full items-center justify-center bg-page text-xs font-light text-body transition-colors hover:bg-page/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 md:flex"
        >
          <img
            src={imgUrl('lede-ad-1', 728, 90)}
            alt={adLabel}
            className="h-full w-full object-cover"
          />
        </a>
      </div>
    </div>
  )
}
