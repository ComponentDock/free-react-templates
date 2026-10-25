import { Check, Star } from 'lucide-react'
import { HERO_CHECKLIST, LICENCE } from '../data'
import { BookingCard } from './BookingCard'

/**
 * The hero: a flat `ink-50` band split 7/5. The left column is the whole
 * above-the-fold argument (eyebrow, headline, lede, rating, a 2×2 checklist of
 * what the fee buys); the right column is the booking card. There is no
 * photograph, no gradient and no blob on this page.
 */
export function Hero() {
  return (
    <section className="bg-ink-50">
      <div className="container mx-auto px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:pt-6">
            <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">
              Louisville · Licensed master plumber
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
              Find the leak first.{' '}
              <span className="text-primary-600">Then open one hole, not six.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-500">
              A slab leak is not expensive because of the pipe. It is expensive because of what
              gets opened looking for it. We locate it with acoustics and thermal imaging, mark the
              spot, and the repair starts from a known point.
            </p>

            <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
              <span aria-hidden="true" className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold text-ink-800">{LICENCE.rating}</span>
              <span>{LICENCE.reviews} · sample data</span>
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HERO_CHECKLIST.map((item) => (
                <li key={item} className="flex gap-2.5 text-base font-medium text-ink-700">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-primary-600"
                    strokeWidth={3}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  )
}
