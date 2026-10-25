import { Check, Star } from 'lucide-react'
import { BRAND, CHECKLIST, RATING } from '../data'
import { QuoteCard } from './QuoteCard'

/**
 * The hero makes one argument and offers one shortcut: the industry's question
 * is the wrong one, and if you would rather not run the numbers yourself the
 * three-field card is beside it. There is no photograph anywhere on this page —
 * the design sells a decision, not an installation.
 */
export function Hero() {
  return (
    <section className="bg-ink-50" aria-labelledby="hero-title">
      <div className="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">
              {BRAND.locality.split(',')[0]} · Licensed and gas certified
            </p>
            <h1
              id="hero-title"
              className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-ink-800 sm:text-5xl lg:text-6xl"
            >
              Forty or fifty gallon{' '}
              <span className="text-primary-600">is the wrong question.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-500">
              What decides the size is how much hot water you might draw in the same minute, and how
              cold the water is when it arrives. Neither of those is on the sticker of your old tank.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="flex gap-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="text-sm font-bold text-ink-600">{RATING.score}</span>
              <span className="text-sm text-ink-600 opacity-80">{RATING.heroSuffix}</span>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex gap-2.5 text-base font-medium text-ink-700">
                  <Check aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <QuoteCard />
          </div>
        </div>
      </div>
    </section>
  )
}
