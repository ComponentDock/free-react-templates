import {
  adsLabel,
  adsLargeImage,
  adsLargeImageAlt,
  adsLargeText,
  adsLargeTitle,
  adsLinkLabel,
  adsSmallBadge,
  adsSmallBadgeLabel,
  adsSmallBadgeUnit,
  adsSmallImage,
  adsSmallImageAlt,
  adsSmallTitle,
} from '../data'

export function AdsRow() {
  return (
    <section aria-label={adsLabel} className="bg-white">
      <div className="mx-auto grid h-auto max-w-[1200px] grid-cols-1 gap-6 px-6 py-[99px] md:h-[490px] md:grid-cols-[39%_1fr]">
        {/* Small banner. */}
        <div className="relative h-full min-h-[340px] overflow-hidden">
          <img
            src={adsSmallImage}
            alt={adsSmallImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <div className="absolute inset-4 border-2 border-white" aria-hidden="true" />
          <div className="absolute bottom-[38px] right-[36px] w-[152px] text-center">
            <div className="bg-white/80 px-2 py-1">
              <span className="text-[60px] font-bold leading-[0.75] text-ink">
                {adsSmallBadge}
                <sup className="text-[36px] font-bold">{adsSmallBadgeUnit}</sup>
              </span>
              <span className="block text-sm text-ink">{adsSmallBadgeLabel}</span>
            </div>
          </div>
          <div className="absolute left-[31px] top-[57px] max-w-[250px]">
            <h3 className="text-[40px] font-semibold leading-tight text-white sm:text-[48px]">
              {adsSmallTitle}
            </h3>
            <a
              href="#products-section"
              className="mt-[18px] inline-block text-sm text-white underline decoration-white underline-offset-4 transition-colors hover:text-accent"
            >
              {adsLinkLabel}
            </a>
          </div>
        </div>

        {/* Large banner. */}
        <div className="relative h-full min-h-[340px] overflow-hidden">
          <img
            src={adsLargeImage}
            alt={adsLargeImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-center p-[30px] pr-[30px] sm:pr-[130px]">
            <h3 className="text-[40px] font-semibold leading-tight text-white sm:text-[48px]">
              {adsLargeTitle}
            </h3>
            <p className="mt-[11px] max-w-xl text-sm leading-[2.14] text-white">{adsLargeText}</p>
            <a
              href="#products-section"
              className="mt-10 inline-block text-sm text-white underline decoration-white underline-offset-4 transition-colors hover:text-accent"
            >
              {adsLinkLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
