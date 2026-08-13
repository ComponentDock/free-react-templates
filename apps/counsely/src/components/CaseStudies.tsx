import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cases } from '../data'

/** Client-side case-studies carousel: one photo card at a time with a gold
 *  hover overlay, prev/next controls, dot indicators, and a "See All
 *  Successful Cases" CTA below. */
export function CaseStudies() {
  const [index, setIndex] = useState(0)
  const count = cases.cards.length

  const next = () => setIndex((current) => (current + 1) % count)
  const prev = () => setIndex((current) => (current - 1 + count) % count)

  const active = cases.cards[index]!

  return (
    <section id="cases" aria-label="Case studies" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-[15px] font-extrabold uppercase tracking-wide text-brand">
            {cases.eyebrow}
          </p>
          <h2 className="mt-4 text-[30px] font-bold text-ink">{cases.headline}</h2>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Successful cases carousel"
        >
          <article className="group relative h-[380px] overflow-hidden rounded">
            <img
              src={active.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white">{active.title}</h3>
              <span className="mt-2 text-sm font-semibold uppercase tracking-widest text-white/90">
                {active.category}
              </span>
            </div>
          </article>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous case"
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 sm:-left-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next case"
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/90 sm:-right-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {cases.cards.map((card, dotIndex) => (
            <button
              key={card.title}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              aria-current={dotIndex === index ? 'true' : undefined}
              onClick={() => setIndex(dotIndex)}
              className={
                dotIndex === index
                  ? 'h-2.5 w-6 rounded-full bg-brand transition-all'
                  : 'h-2.5 w-2.5 rounded-full bg-black/20 transition-all hover:bg-brand/50'
              }
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#cases"
            className="inline-block rounded bg-brand px-8 py-3 text-base font-medium text-white transition-colors hover:bg-brand/90"
          >
            {cases.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
