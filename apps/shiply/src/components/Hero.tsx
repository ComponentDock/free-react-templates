import { hero } from '../data'

/** Full-viewport hero over a freight photo with a dark overlay, an
 *  uppercase headline, and a square orange CTA. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-32 text-center">
        <h1 className="text-4xl font-black uppercase leading-tight text-white md:text-[4rem]">
          {hero.heading}
        </h1>
        <p className="mt-5">
          <a
            href="#quote"
            className="inline-block border-2 border-transparent bg-brand px-5 py-3 uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-transparent"
          >
            {hero.cta}
          </a>
        </p>
      </div>
    </section>
  )
}
