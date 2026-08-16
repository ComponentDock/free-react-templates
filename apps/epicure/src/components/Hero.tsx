import { hero } from '../data'

/** Full-width hero: an indigo `:before` panel behind an intro column
 *  (white uppercase Oswald headline, subtext, white + outline CTAs) and
 *  a food photo bleeding off the right edge. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome"
      className="relative mb-20 overflow-hidden bg-white pt-24 xl:pt-0"
    >
      {/* indigo panel behind the intro (70% width, left) */}
      <div
        className="absolute inset-y-0 left-0 z-0 w-full bg-primary xl:w-[76%]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-10 pt-10 xl:flex-row xl:items-center xl:px-16">
        <div className="max-w-2xl xl:ml-20 xl:mt-24">
          <h1 className="font-display text-4xl font-semibold uppercase leading-[1.1] text-white md:text-5xl xl:text-[5rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90 xl:text-xl">{hero.subtext}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn-white">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-outline-white">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="relative z-0 -mr-6 xl:absolute xl:right-0 xl:top-0 xl:-z-10 xl:h-full">
          <img
            src={hero.image}
            alt="Table set with a roast dinner"
            className="h-[320px] w-full object-cover opacity-95 md:h-[420px] xl:h-[720px] xl:w-[900px]"
          />
        </div>
      </div>
    </section>
  )
}
