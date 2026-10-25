import { Check, Star } from 'lucide-react'
import { brand, heroTicks } from '../data'
import { QuickBook } from './QuickBook'

const STARS = [0, 1, 2, 3, 4]

/**
 * Split hero: the claim and its four ticks in the seven-column copy block, the
 * quick-book card in the five-column right rail from `lg` and stacked beneath
 * the copy below it. The second sentence of the headline is a `span`, not a
 * second heading, so the two-tone treatment never costs a heading level.
 */
export function Hero() {
  return (
    <section className="bg-ink-50">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7 lg:pt-6">
            <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">
              {brand.city} · Certified backflow tester
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
              You got the letter.{' '}
              <span className="text-primary-600">This takes twenty minutes.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-500">
              A certified tester opens the pit, tests the device and files the certificate with{' '}
              {brand.county} the same day. The price is on this page, and the water stays on.
            </p>
            <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
              <span className="flex items-center gap-0.5" role="img" aria-label="Rated 4.9 out of 5">
                {STARS.map((star) => (
                  <Star key={star} aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-bold">{brand.rating}</span>
              <span className="opacity-80">{brand.ratingNote}</span>
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroTicks.map((tick) => (
                <li key={tick} className="flex gap-2.5 text-base font-medium text-ink-700">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                  <span className="min-w-0">{tick}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="quote" className="min-w-0 scroll-mt-24 lg:col-span-5">
            <QuickBook />
          </div>
        </div>
      </div>
    </section>
  )
}
