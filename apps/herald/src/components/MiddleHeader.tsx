import { bannerSubtitle, bannerTitle, imgUrl, readMoreLabel, siteName } from '../data'

/** Middle header: logo left, photo-backed ad banner with READ MORE right. */
export function MiddleHeader() {
  return (
    <div className="border-b border-[#eee]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-6 px-4 py-5 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href="#" className="font-heading text-2xl font-bold text-primary">
            {siteName}
          </a>
        </div>
        <div className="lg:col-span-8">
          <div
            className="relative flex min-h-[120px] items-center justify-between gap-4 overflow-hidden bg-cover bg-center px-8 text-white"
            style={{ backgroundImage: `url(${imgUrl('herald-banner', 800, 200)})` }}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
            <div className="relative">
              <h5 className="font-heading text-lg font-semibold">{bannerTitle}</h5>
              <h6 className="mt-1 text-sm text-white/90">{bannerSubtitle}</h6>
            </div>
            <a
              href="#"
              className="relative inline-block border border-white bg-white px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              {readMoreLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
