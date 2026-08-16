import { hero } from '../data'

/* Full-height hero: background cafe photo under a dark overlay with a
   serif headline (quoted word in brand copper), a light subtext and a
   solid copper "Our Menu" button. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome"
      className="relative flex h-[900px] items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-semibold leading-[1.1] text-white lg:text-[69px]">
            {hero.before} <span className="text-copper">&quot;{hero.accent}&quot;</span>{' '}
            {hero.after}
          </h1>
          <p className="mt-8 max-w-xl text-xl font-light leading-relaxed text-white/90">
            {hero.text}
          </p>
          <a href="#menu" className="btn-copper mt-10 px-10 py-[21px]">
            Our Menu
          </a>
        </div>
      </div>
    </section>
  )
}
