import { banner } from '../data'

/** Banner section (reference `.banner-section.set-bg`): dark gradient band
 *  with a headline + paragraph on the left and a magenta CTA on the right. */
export function Banner() {
  return (
    <section
      id="contact"
      aria-label="Dedicated hosting banner"
      className="bg-gradient-to-br from-indigo-deep to-near-black py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center lg:flex-row lg:px-8 lg:text-left">
        <div>
          <h2 className="font-heading text-4xl font-semibold text-white">{banner.headline}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/40">{banner.text}</p>
        </div>
        <a
          href="#pricing"
          className="shrink-0 rounded-[14px] bg-primary-600 px-10 py-4 text-sm text-white transition-colors hover:bg-primary-700"
        >
          {banner.cta}
        </a>
      </div>
    </section>
  )
}
