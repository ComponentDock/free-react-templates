import { HERO_CTA, HERO_IMAGE, HERO_TAGLINE, HERO_TITLE } from '../data'

/**
 * Hero — dark full-width banner (source `.slider_area`, bg #000 over a
 * photographic banner background) with the white Playfair Display headline,
 * a 26px silver tagline and an outlined gold "Learn More" button that fills
 * gold with white text on hover. Text block sits left, mirroring the source.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-hero text-paper"
      aria-label="Hero"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] opacity-70"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-hero via-hero/80 to-hero/40"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 py-32 lg:px-8 lg:py-44">
        <div className="max-w-2xl">
          <h3 className="font-heading text-4xl leading-tight font-normal text-paper capitalize lg:text-[56px] lg:leading-[68px]">
            {HERO_TITLE}
          </h3>
          <p className="mt-4 mb-12 max-w-xl text-2xl leading-8 font-normal text-hero-sub lg:mt-4 lg:mb-[50px]">
            {HERO_TAGLINE}
          </p>
          <a
            href="#about"
            className="inline-block border border-brand px-11 py-4 text-base font-semibold text-brand capitalize transition-colors hover:border-brand hover:bg-brand hover:text-paper"
          >
            {HERO_CTA}
          </a>
        </div>
      </div>
    </section>
  )
}
