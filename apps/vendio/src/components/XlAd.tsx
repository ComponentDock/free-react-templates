import { adsLinkLabel, xlAdImage, xlAdImageAlt, xlAdText, xlAdTitle } from '../data'

export function XlAd() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img src={xlAdImage} alt={xlAdImageAlt} className="h-[420px] w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h2 className="text-[40px] font-semibold leading-tight text-white sm:text-[48px]">
            {xlAdTitle}
          </h2>
          <p className="mt-[11px] max-w-xl text-sm leading-[2.14] text-white">{xlAdText}</p>
          <a
            href="#products-section"
            className="mt-10 inline-block text-sm text-white underline decoration-white underline-offset-4 transition-colors hover:text-accent"
          >
            {adsLinkLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
