import { ctaButtonLabel, ctaImage, ctaTitle } from '../data'

export function Cta() {
  return (
    <section
      id="news-section"
      className="relative bg-cover bg-center py-24 lg:py-[105px]"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-normal text-white lg:text-5xl">{ctaTitle}</h2>
        <a
          href="#contact-section"
          className="mt-7 inline-flex h-[52px] w-[205px] items-center justify-center bg-gradient-to-r from-brand to-brand-light text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {ctaButtonLabel}
        </a>
      </div>
    </section>
  )
}
