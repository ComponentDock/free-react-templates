import { HERO, HERO_FACTS, img } from '../content'
import { ActionLink, Container, Eyebrow, FactTable } from './ui'

/**
 * Flat grey hero: a 48 px headline over a four-row fact table on a 7/5 split,
 * with the only photograph above the fold on the right.
 */
export function Hero() {
  return (
    <section className="border-b border-ink-200 bg-ink-50 dark:border-gray-800 dark:bg-gray-900">
      <Container className="grid gap-12 py-14 lg:grid-cols-12 lg:items-center lg:py-20">
        <div className="lg:col-span-7">
          <Eyebrow>{HERO.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl dark:text-white">
            {HERO.heading}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-ink-500 dark:text-gray-300">
            {HERO.lede}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#contact">{HERO.primaryCta}</ActionLink>
            <ActionLink href="#projects" variant="outline">
              {HERO.secondaryCta}
            </ActionLink>
          </div>

          <FactTable rows={HERO_FACTS} className="mt-10 max-w-md" />
        </div>

        <div className="lg:col-span-5">
          <img
            src={img('plantroom', 960, 1280)}
            alt={HERO.imageAlt}
            width={960}
            height={1280}
            className="aspect-[4/3] w-full rounded-xl object-cover lg:aspect-[3/4]"
          />
        </div>
      </Container>
    </section>
  )
}
