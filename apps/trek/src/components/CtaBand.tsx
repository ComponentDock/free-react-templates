import { ctaButtonLabel, ctaText, ctaTitle, heroImage } from '../data'

export function CtaBand() {
  return (
    <section aria-label={ctaTitle} className="relative px-6 py-28">
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-sand/40" />
      <div className="relative mx-auto max-w-[1200px] text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white">{ctaTitle}</h2>
          <p className="mt-4 leading-[1.7] text-white">{ctaText}</p>
          <a
            href="#contact-section"
            className="mt-8 inline-block rounded bg-sand px-6 py-4 text-sm font-bold uppercase tracking-[0.2rem] text-white transition-colors hover:bg-white hover:text-sand"
          >
            {ctaButtonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
