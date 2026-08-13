import { hero } from '../data'

/** Full-width banner hero: cover background image, tagline h4, headline
 *  h1, paragraph and a gradient "take appointment" CTA. Text sits in a
 *  left column over the light photo, matching the source. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center py-[280px] md:py-[350px] lg:py-[400px]"
      style={{ backgroundImage: `url(${hero.image})` }}
    >
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-xl">
          <h4 className="mb-3 text-[16px] font-normal text-ink">{hero.tagline}</h4>
          <h1 className="mb-5 text-[32px] font-bold leading-tight text-ink md:text-[45px]">
            {hero.headline}
          </h1>
          <p className="mb-8 max-w-md text-[15px] leading-relaxed text-body">{hero.copy}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-[12px] font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-80"
            style={{ background: 'linear-gradient(to right, #244cfd, #15e4fd)' }}
          >
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
