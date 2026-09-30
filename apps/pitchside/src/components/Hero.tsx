import { hero } from '../data'

/** Hero (reference `.hero-section`): 700px photo band with a dark overlay,
 *  centered date line + headline, and the square brand-red CTA. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[700px] items-center justify-center overflow-hidden"
    >
      <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative px-4 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/80">{hero.date}</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-white lg:text-5xl">
          {hero.headline}
        </h1>
        <a
          href="#schedule"
          className="mt-8 inline-block bg-brand px-9 pt-[14px] pb-3 text-base font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-brand"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
}
