import { ArrowRight } from 'lucide-react'
import { HERO } from '../content'
import { ActionLink, Container, Eyebrow, RatingLine } from './ui'

/**
 * Cream band, 6 / 6 split: the argument on the left, one square photograph of
 * the installed unit on the right. The unit is the hero here, not a van.
 */
export function Hero() {
  return (
    <section className="bg-sand-100 dark:bg-gray-950">
      <Container className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <Eyebrow>{HERO.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.15] text-ink-800 sm:text-5xl lg:text-6xl dark:text-white">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-[1.625] text-ink-500 dark:text-gray-300">
            {HERO.lede}
          </p>
          <div className="mt-5">
            <RatingLine />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="#quiz">{HERO.primaryCta}</ActionLink>
            <ActionLink href="#products" variant="outline">
              {HERO.secondaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
          </div>
        </div>

        <img
          src={HERO.image}
          alt={HERO.imageAlt}
          width={1152}
          height={1152}
          className="aspect-square w-full rounded-2xl object-cover lg:max-w-[576px] lg:justify-self-end"
        />
      </Container>
    </section>
  )
}
