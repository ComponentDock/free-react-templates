import { HERO } from '../data'

/* Hero — full-width cockpit photo with a centered white headline, subtext
   and a solid white CTA button, per the source hero band. */
export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[560px] items-center justify-center bg-cover bg-center lg:min-h-[680px]"
      style={{
        backgroundImage: `linear-gradient(rgba(29,42,59,0.35), rgba(29,42,59,0.35)), url(${HERO.image})`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-28 text-center lg:px-8">
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[64px]">
          {HERO.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-white/95 lg:text-xl">
          {HERO.subtext}
        </p>
        <a
          href="#special-offers"
          className="mt-9 inline-block bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[2px] text-ink transition-colors hover:bg-ink hover:text-white"
        >
          {HERO.cta}
        </a>
      </div>
    </section>
  )
}
