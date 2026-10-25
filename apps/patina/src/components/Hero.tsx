import { hero } from '../content'
import { Eyebrow, containerClass } from './ui'

/** Full-bleed photograph, 65 % ink wash, copy bottom-left. */
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-headline" className="relative isolate flex min-h-[70vh] items-end overflow-hidden lg:min-h-[88vh]">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-900/65" />

      <div className={`${containerClass} pt-32 pb-16 lg:pt-40 lg:pb-24`}>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1
          id="hero-headline"
          className="mt-6 max-w-3xl font-serif text-4xl leading-[1.15] font-normal text-white sm:text-5xl lg:text-6xl"
        >
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-7 text-ink-100">{hero.lead}</p>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center border border-primary-500 px-8 py-4 text-xs leading-4 font-semibold tracking-[0.18em] text-primary-400 uppercase transition-colors hover:bg-primary-500 hover:text-ink-900"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  )
}
