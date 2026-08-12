import { HERO } from '../data'

/* Hero — full-width royal-blue band: flat illustration panel on the left,
   eyebrow + headline + subtext (with a green-highlighted number) + green
   "Get in touch" CTA on the right; stacks vertically on narrow screens. */

export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex min-h-[750px] items-center overflow-hidden bg-brand"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-32 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <img
            src={HERO.image}
            alt="People working with cloud technology at a desk"
            className="w-full rounded-lg shadow-2xl"
            loading="eager"
          />
        </div>
        <div className="order-1 text-left lg:order-2">
          <p className="text-[16px] font-semibold uppercase tracking-[2px] text-white/80">
            {HERO.eyebrow}
          </p>
          <h1 className="mt-4 text-[40px] font-bold leading-tight text-white sm:text-[50px] lg:text-[60px]">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80">
            {HERO.paragraph} <span className="font-semibold text-accent">{HERO.highlight}</span>{' '}
            {HERO.highlightSuffix}
          </p>
          <a
            href="#contact-section"
            className="mt-10 inline-block rounded-md bg-accent px-6 py-4 text-[16px] font-medium text-white shadow-lg transition-colors hover:bg-accentdark"
          >
            {HERO.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
