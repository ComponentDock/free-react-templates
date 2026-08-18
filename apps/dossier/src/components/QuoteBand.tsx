import { quote, quoteImage } from '../data'

/**
 * Green split quote band (reference: .visit-tailor-area) with a cover photo
 * on the left and a serif quote on the right.
 */
export function QuoteBand() {
  return (
    <section aria-label="Quote" className="bg-brand-green">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={quoteImage}
            alt="Designer at work in the studio"
            className="h-64 w-full object-cover lg:h-full"
          />
        </div>
        <div className="flex items-center p-10 lg:w-1/2 lg:p-20">
          <blockquote className="font-heading text-2xl leading-relaxed text-ink lg:text-[28px]">
            “{quote}”
          </blockquote>
        </div>
      </div>
    </section>
  )
}
