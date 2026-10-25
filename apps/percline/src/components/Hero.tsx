import { Check } from 'lucide-react'
import { HERO, RATING } from '../content'
import { QuoteCard } from './QuoteCard'
import { Reveal } from './Reveal'
import { Stars } from './Stars'

/**
 * The hero: the selling argument on the left, the three-field card on the
 * right, on the warm stone ground. No photography — the page has none at all.
 */
export function Hero() {
  return (
    <section className="bg-ink-50 py-14 lg:py-20">
      <div className="container mx-auto grid items-start gap-10 px-4 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-7 lg:pt-6">
          <p className="text-sm font-bold uppercase tracking-wide text-primary-700">{HERO.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
            {HERO.headline}{' '}
            <span className="text-primary-600">{HERO.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-500">{HERO.lede}</p>
          <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
            <Stars />
            <span className="font-bold text-ink-800">{RATING}</span>
            <span className="opacity-80">{HERO.ratingNote}</span>
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HERO.checklist.map((item) => (
              <li key={item} className="flex gap-2.5 text-base font-medium text-ink-700">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-primary-600"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="lg:col-span-5">
          <QuoteCard />
        </div>
      </div>
    </section>
  )
}
