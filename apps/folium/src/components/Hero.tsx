import { hero } from '../data'

/** Full-viewport hero cover: background photo with a dark olive overlay,
 *  white thin headline, subheading and an outline-white square CTA that
 *  anchors to the intro section. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-overlay/70" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-32">
        <div className="max-w-xl">
          <h1 className="text-5xl font-light leading-tight text-white">{hero.headline}</h1>
          <p className="mt-5 max-w-md text-base font-light leading-relaxed text-white/70">
            {hero.subheading}
          </p>
          <a
            href="#about"
            className="mt-8 inline-block border-2 border-white/80 px-6 py-4 text-base text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
