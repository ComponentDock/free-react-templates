import { Check, Star } from 'lucide-react'
import { HERO } from '../content'
import { QuoteForm } from './QuoteForm'
import { Container, Eyebrow } from './ui'

/**
 * Grey hero: the headline states the promise in two lines, the second line in
 * lime, and the right rail is the three-field quote card — no photograph.
 */
export function Hero() {
  return (
    <section className="bg-ink-50 py-14 dark:bg-gray-900 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>{HERO.eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.1] tracking-[-1.5px] text-ink-800 sm:text-5xl lg:text-6xl dark:text-white">
            {HERO.heading}
            <span className="block text-primary-600 dark:text-primary-400">{HERO.headingAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-ink-500 dark:text-gray-300">
            {HERO.lede}
          </p>

          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink-600 dark:text-gray-300">
            <span className="flex gap-0.5" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span>{HERO.ratingScore}</span>
            <span className="font-normal text-ink-500 dark:text-gray-400">{HERO.ratingCaption}</span>
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HERO.ticks.map((tick) => (
              <li key={tick} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                <span className="text-base leading-6 text-ink-700 dark:text-gray-200">{tick}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <QuoteForm />
        </div>
      </Container>
    </section>
  )
}
