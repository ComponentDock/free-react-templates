import { HERO, PLANS, RATING } from '../content'
import { PlanCards } from './PlanCards'
import { Reveal } from './Reveal'
import { Stars } from './Stars'

/**
 * The hero: five columns of argument, seven columns of plan cards, and no
 * photograph anywhere. The middle card is the design's emphasis, so the price
 * is the first thing a visitor meets.
 */
export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto grid items-start gap-12 px-4 py-16 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <Reveal className="lg:col-span-5 lg:pt-4">
          <p className="text-sm font-medium uppercase tracking-wide text-primary-600">
            {HERO.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-medium leading-[1.15] tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
            {HERO.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg font-light leading-[1.625] text-ink-500">
            {HERO.lede}
          </p>
          <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
            <Stars label={RATING} />
            <span className="font-bold text-ink-800">{RATING}</span>
            <span className="opacity-80">{HERO.ratingNote}</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#plans"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-primary-700"
            >
              {HERO.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-ink-200 px-6 py-3.5 text-base font-medium text-ink-700 transition-colors hover:border-primary-500 hover:text-primary-700"
            >
              {HERO.secondaryCta}
            </a>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <h2 className="sr-only">{PLANS.anchorLabel}</h2>
            <PlanCards />
            <p className="mt-4 text-sm text-ink-400">{HERO.pricingNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
