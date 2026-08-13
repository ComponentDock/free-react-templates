import { hero } from '../data'

/** Full-width hero banner: food-ingredient background photo, uppercase
 *  eyebrow, big headline, short paragraph and a flat red CTA that anchors
 *  to the menu section. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-32 text-center text-white">
        <h6 className="mb-4 text-sm font-light tracking-[0.2em] uppercase">{hero.eyebrow}</h6>
        <h1 className="text-5xl font-bold leading-tight sm:text-6xl">{hero.heading}</h1>
        <p className="mx-auto mt-5 max-w-[515px] font-light leading-relaxed">{hero.body}</p>
        <a
          href="#menu"
          className="mt-8 inline-block bg-brand px-[30px] leading-[42px] text-sm font-medium text-white uppercase transition-colors duration-300 hover:bg-ink"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
}
