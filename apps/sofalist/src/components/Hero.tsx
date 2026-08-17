import { HERO } from '../data'
import { PillLink } from './Button'

/* Hero — full-viewport split: text panel on the left over the pale-blue
   background, product photo on the right, white pill CTA. */
export function Hero() {
  const [before, after] = HERO.headline.split(HERO.emphasis)

  return (
    <section
      aria-label="Hero"
      id="home"
      className="flex min-h-screen flex-col bg-paleblue lg:flex-row"
    >
      <div className="flex flex-1 items-center justify-center px-6 py-28 lg:py-32">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink lg:text-[52px]">
            {before}
            <span className="text-steel">{HERO.emphasis}</span>
            {after}
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">{HERO.text}</p>
          <PillLink href="#collection" className="mt-8">
            {HERO.ctaLabel}
          </PillLink>
        </div>
      </div>
      <div className="relative min-h-[40vh] flex-1 lg:min-h-0">
        <img
          src={HERO.image}
          alt="Furniture collection showcase"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
