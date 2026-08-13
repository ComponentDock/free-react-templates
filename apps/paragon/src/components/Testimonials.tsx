import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { HERO_INTERVAL_MS, TESTIMONIALS } from '../data'

/* div.site-section.section-4 — centered testimonial slider
   (.slide-one-item): green quote icon (2rem, #207561), large quote
   (1.5rem), author name, prev/next + dots (inactive #ccc, active #207561). */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const slideCount = TESTIMONIALS.length

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % slideCount),
      HERO_INTERVAL_MS,
    )
    return () => clearInterval(timer)
  }, [slideCount])

  const goTo = (next: number) => setIndex((next + slideCount) % slideCount)

  const testimonial = TESTIMONIALS[index]!

  return (
    <section aria-label="Testimonials" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Quote aria-hidden="true" className="mx-auto h-8 w-8 text-brand" />
        <blockquote className="mt-6 text-xl leading-relaxed text-ink md:text-2xl">
          {testimonial.quote}
        </blockquote>
        <p className="mt-6 text-[15px] font-bold text-ink">{testimonial.author}</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="cursor-pointer rounded-full border border-line p-2 text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.quote}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => goTo(i)}
                className={cn(
                  'h-2.5 w-2.5 cursor-pointer rounded-full transition-colors',
                  i === index ? 'bg-brand' : 'bg-[#ccc] hover:bg-faint',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="cursor-pointer rounded-full border border-line p-2 text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
