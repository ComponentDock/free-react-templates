import { adLabel, imgUrl } from '../data'

export function AdWidget() {
  return (
    <div className="my-7" id="ad">
      <a
        href="#ad"
        aria-label={adLabel}
        className="block h-[90px] w-full bg-page transition-colors hover:bg-page/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
      >
        <img
          src={imgUrl('lede-ad-2', 728, 90)}
          alt={adLabel}
          className="h-full w-full object-cover"
        />
      </a>
    </div>
  )
}
