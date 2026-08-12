import { CTA_TEXT, CTA_TITLE } from '../data'

/**
 * CtaBanner — first call-to-action banner (source `section.wantToWork-area`
 * gray-bg): "Up to 40% Off" heading with a supporting paragraph.
 */
export function CtaBanner() {
  return (
    <section className="bg-foam py-20" aria-label="Offer">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">{CTA_TITLE}</h2>
        <p className="mt-4 leading-relaxed text-body">{CTA_TEXT}</p>
      </div>
    </section>
  )
}
