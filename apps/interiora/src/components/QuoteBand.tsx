import { QuoteIcon } from 'lucide-react'
import { QUOTE_BAND } from '../data'

/* QuoteBand — centered client quote with attribution above a row of brand
   logo placeholders. */
export function QuoteBand() {
  return (
    <section aria-label="Quote" id="story" className="bg-white py-24 lg:py-[120px]">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <QuoteIcon className="mx-auto mb-6 h-10 w-10 text-brand" aria-hidden="true" />
        <blockquote className="font-display text-2xl font-medium leading-relaxed text-ink">
          {QUOTE_BAND.quote}
        </blockquote>
        <p className="mt-6 text-base text-body">{QUOTE_BAND.attribution}</p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {QUOTE_BAND.logos.map((logo, i) => (
            <span
              key={logo}
              aria-label={`Brand logo ${i + 1}`}
              className="font-display text-2xl font-semibold tracking-widest text-subtext"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
