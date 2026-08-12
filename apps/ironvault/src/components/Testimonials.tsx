import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Testimonials — centered "Testimonial" title plus a dependency-free
 * carousel: one quote at a time (avatar, name, tag, quote) with prev/next
 * controls that wrap and dot buttons that jump to a slide.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const slide = TESTIMONIALS[index]!

  const previous = () => setIndex((current) => (current - 1 + total) % total)
  const next = () => setIndex((current) => (current + 1) % total)

  return (
    <section id="testimonials" className="pb-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title="Testimonial" center />
        <div className="mx-auto mt-10 max-w-3xl text-center">
          <img
            src={`https://picsum.photos/seed/ironvault-client-${index + 1}/80/80`}
            alt={`${slide.name} portrait`}
            className="mx-auto h-20 w-20 rounded-full object-cover"
          />
          <Quote className="mx-auto mt-6 h-8 w-8 text-underline" aria-hidden="true" />
          <blockquote className="mt-4 text-base font-light text-body">{slide.quote}</blockquote>
          <h3 className="mt-6 text-lg font-bold text-ink">{slide.name}</h3>
          <p className="text-sm font-light text-eyebrow">{slide.tag}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previous}
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                  aria-current={dotIndex === index ? 'true' : undefined}
                  onClick={() => setIndex(dotIndex)}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    dotIndex === index ? 'bg-brand' : 'bg-line',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
