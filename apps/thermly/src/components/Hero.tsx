import { Check, Star } from 'lucide-react'
import { brand, heroTicks } from '../data'
import { BookingCard } from './BookingCard'

export interface HeroProps {
  today?: Date
}

/**
 * Split hero: the claim and its four ticks on the left, the booking widget on
 * the right from `lg` and stacked beneath the copy below it.
 */
export function Hero({ today }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-primary-200/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5 lg:pt-8">
            <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">
              {brand.city} · Licensed C-20 contractor
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] font-bold tracking-tight text-ink-800 sm:text-5xl">
              Pick your arrival window <span className="text-primary-600">right now.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-500">
              Air conditioning, heating and air quality across {brand.county}. Choose a day and a
              two-hour window here, and a technician arrives inside it.
            </p>
            <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
              <span
                className="flex items-center gap-0.5"
                role="img"
                aria-label="Rated 4.8 out of 5"
              >
                <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
              </span>
              <span className="font-bold">{brand.rating}</span>
              <span className="opacity-80">{brand.ratingNote}</span>
            </p>
            <ul className="mt-8 space-y-3">
              {heroTicks.map((tick) => (
                <li key={tick} className="flex gap-2.5 text-base font-medium text-ink-700">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                  <span className="min-w-0">{tick}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="book" className="min-w-0 scroll-mt-24 lg:col-span-7">
            <BookingCard today={today} />
          </div>
        </div>
      </div>
    </section>
  )
}
