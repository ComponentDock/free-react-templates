import { quote } from '../data'

/**
 * White quote strip that overlaps the footer by 60px: uppercase heading,
 * short paragraph, and a pink pill link.
 */
export function QuoteStrip() {
  return (
    <section
      aria-label="Become a model"
      className="relative z-20 -mb-16 bg-white px-6 pt-16 pb-10 shadow-[0_18px_37px_-28px_rgba(0,0,0,0.75)]"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl font-bold tracking-[3px] text-ink uppercase lg:text-3xl">
          {quote.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed">{quote.body}</p>
        <a
          href={quote.ctaHref}
          className="mt-8 inline-block bg-brand px-5 py-2 text-sm font-bold text-white uppercase transition-colors hover:bg-ink"
        >
          {quote.cta}
        </a>
      </div>
    </section>
  )
}
