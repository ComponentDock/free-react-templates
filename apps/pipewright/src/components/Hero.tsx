import { HERO, RATING, RATING_NOTE } from '../content'
import { Container, Kicker, PhonePill, Stars } from './ui'

/**
 * Five columns of portrait with an instructional caption under it, seven
 * columns of argument. Nothing in this band animates: it is the one band that
 * paints immediately.
 */
export function Hero() {
  return (
    <section className="bg-ink-50">
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-16 lg:py-20">
        <figure className="lg:col-span-5">
          <img
            src={HERO.image}
            alt={HERO.imageAlt}
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-sm text-ink-400">{HERO.figcaption}</figcaption>
        </figure>

        <div className="lg:col-span-7">
          <Kicker>{HERO.kicker}</Kicker>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] text-ink-800 sm:text-5xl lg:text-6xl">
            {HERO.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">{HERO.lede}</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">{HERO.lede2}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PhonePill label={HERO.cta} />
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
              <Stars label={`Rated ${RATING} out of 5`} />
              <span className="font-bold">{RATING}</span>
              <span className="opacity-80">{RATING_NOTE}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
