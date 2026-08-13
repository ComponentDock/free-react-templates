import { Rocket } from 'lucide-react'
import { hero } from '../data'

/** Full-height dark hero (reference `.hero-section`): deep indigo-to-near-
 *  black gradient "space" background, white headline, supporting copy, a
 *  magenta pill CTA, and a large rocket graphic on the right. */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[835px] items-center overflow-hidden bg-gradient-to-br from-indigo-deep to-near-black"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-32 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="font-heading text-5xl font-semibold text-white lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">{hero.text}</p>
          <a
            href="#pricing"
            className="mt-10 inline-block rounded-[14px] bg-primary-600 px-6 py-4 text-sm text-white transition-colors hover:bg-primary-700"
          >
            {hero.cta}
          </a>
        </div>
        <div className="hidden justify-center lg:flex">
          <Rocket
            className="h-64 w-64 -rotate-45 text-primary-600"
            strokeWidth={1}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
