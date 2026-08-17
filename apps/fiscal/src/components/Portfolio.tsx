import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PORTFOLIO_SLIDES } from '../data'

/* Portfolio — light "Our Portfolio" section with a state-based carousel:
   one slide at a time, Prev/Next pill buttons, and dot pagination. */
export function Portfolio() {
  const [index, setIndex] = useState(0)
  const slide = PORTFOLIO_SLIDES[index]!

  function prev() {
    setIndex((current) => (current - 1 + PORTFOLIO_SLIDES.length) % PORTFOLIO_SLIDES.length)
  }

  function next() {
    setIndex((current) => (current + 1) % PORTFOLIO_SLIDES.length)
  }

  return (
    <section id="portfolio-section" aria-label="Portfolio" className="bg-surface px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-brand">Our Portfolio</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <article className="mx-auto mt-12 max-w-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <img
            src={slide.image}
            alt={`Portfolio slide ${index + 1}`}
            className="aspect-[10/7] w-full object-cover"
          />
          <div className="p-8">
            <h3 className="font-display text-xl font-semibold text-ink">{slide.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{slide.text}</p>
          </div>
        </article>

        <div className="mt-8 flex justify-center gap-3">
          {PORTFOLIO_SLIDES.map((portfolioSlide, i) => (
            <button
              key={portfolioSlide.image}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-muted/40 hover:bg-muted/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
