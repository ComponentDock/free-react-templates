import { heroHeading, heroSectionLabel } from '../data'

export function Hero() {
  return (
    <section id="home" aria-label={heroSectionLabel} className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="font-display text-3xl font-normal uppercase leading-relaxed text-ink md:text-4xl">
          {heroHeading}
        </h1>
      </div>
    </section>
  )
}
