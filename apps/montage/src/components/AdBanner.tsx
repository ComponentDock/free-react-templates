import { addBannerLabel } from '../data'

/* Full-width ad-banner placeholder between the content sections and the
   footer (reference `.big-add-area` — the original shows an image banner;
   recreated as a styled placeholder box). */
export function AdBanner() {
  return (
    <section aria-label="Advertisement" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="flex h-32 items-center justify-center border-2 border-dashed border-line bg-mist font-display text-lg font-bold uppercase tracking-[0.3em] text-mute sm:h-40">
          {addBannerLabel}
        </div>
      </div>
    </section>
  )
}
