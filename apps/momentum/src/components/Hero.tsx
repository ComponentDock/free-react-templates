import { hero } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-dark bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <h1 className="text-6xl leading-none font-bold text-white md:text-7xl lg:text-[90px]">
          {hero.kicker}
          <span className="block">{hero.headline}</span>
        </h1>
        <p className="mt-6 text-[11px] font-bold tracking-[.2rem] text-white/70 uppercase">
          {hero.credit}
        </p>
        <a
          href="#countdown"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-pink px-8 py-4 text-xs font-bold tracking-[.2rem] text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {hero.ctaLabel}
        </a>
      </div>
    </section>
  )
}
