import { Check, Star } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import {
  HERO_EYEBROW,
  HERO_GHOST,
  HERO_LEDE,
  HERO_LINE_ONE,
  HERO_LINE_TWO,
  HERO_RATING,
  HERO_RATING_NOTE,
  HERO_TICKS,
  PHONE_HREF,
  PHONE_LABEL,
} from '../content'
import { Reveal } from './Reveal'

/** Five amber stars, then the figure and the sample suffix. */
function Rating() {
  return (
    <p className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
      <span className="flex gap-0.5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((star) => (
          <Star key={star} className="h-4 w-4 text-amber-400" fill="currentColor" />
        ))}
      </span>
      <span className="font-bold">{HERO_RATING}</span>
      <span className="opacity-80">{HERO_RATING_NOTE}</span>
    </p>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-ice-50">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-ice-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-ice-700">{HERO_EYEBROW}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {HERO_LINE_ONE}
            <span className="block text-primary-600">{HERO_LINE_TWO}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-600">{HERO_LEDE}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={PHONE_HREF} className="text-base shadow-brand">
              Call {PHONE_LABEL}
            </ButtonLink>
            <a
              href="#response"
              className="inline-flex items-center justify-center rounded-lg border border-ink-300 px-5 py-2.5 text-sm font-bold text-ink-700 transition-colors hover:border-ink-500"
            >
              {HERO_GHOST}
            </a>
          </div>
          <Rating />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HERO_TICKS.map((tick) => (
              <li key={tick} className="flex gap-2.5 font-medium text-ink-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                <span className="min-w-0">{tick}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
