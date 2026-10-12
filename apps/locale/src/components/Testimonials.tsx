import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  NEXT_ARROW_LABEL,
  PREVIOUS_ARROW_LABEL,
  TESTIMONIALS,
  TESTIMONIALS_TITLE,
  type Testimonial,
} from '../lib/site'
import {
  containerClass,
  quoteArrowClass,
  sectionClass,
  sectionTitleClass,
} from '../lib/styles'

/**
 * People talking about — the quote card on the pale blue-grey band with the speaker's portrait, name
 * and role below it, and the pair of dark round arrows stepping through the quotes (wrapping at both
 * ends).
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const slide = TESTIMONIALS[index] as Testimonial

  return (
    <section className={cn(sectionClass, 'pb-32')}>
      <div className={cn(containerClass, 'max-w-3xl text-center')}>
        <h2 className={sectionTitleClass}>{TESTIMONIALS_TITLE}</h2>

        <div className="mt-10">
          <div data-testid="quote-card" className="rounded-[5px] bg-section px-10 py-8 text-left">
            <p className="text-xl leading-relaxed text-navy">{slide.quote}</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <img
              src={slide.image}
              alt={slide.name}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div className="text-left">
              <span className="block font-display text-xl font-semibold text-navy">
                {slide.name}
              </span>
              <p className="text-roletext">{slide.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label={PREVIOUS_ARROW_LABEL}
            onClick={() => setIndex((current) => (current - 1 + total) % total)}
            className={quoteArrowClass}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={NEXT_ARROW_LABEL}
            onClick={() => setIndex((current) => (current + 1) % total)}
            className={quoteArrowClass}
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
