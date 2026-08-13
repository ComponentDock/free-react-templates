import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/** "Successful Stories" testimonial carousel: 5 quote cards shown one at a
 *  time, each with a quote paragraph, quote icon, round avatar, name and
 *  "Customer" position, plus prev/next controls and dots. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const goTo = (next: number) => {
    setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length)
  }

  const current = testimonials[index]!

  return (
    <section aria-label="Successful Stories" className="bg-light py-16 md:py-[7em]">
      <div className="mx-auto max-w-[1240px] px-4">
        <h3 className="section-eyebrow">Testimony</h3>
        <h2 className="section-title">Successful Stories</h2>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="rounded bg-white p-6 text-center shadow-sm md:p-10">
            <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
            <blockquote className="mt-4 font-display text-lg italic leading-relaxed text-ink">
              “{current.quote}”
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <img
                src={current.image}
                alt={current.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-ink">{current.name}</p>
                <p className="text-xs text-muted">Customer</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink/60 transition-colors hover:border-brand hover:text-brand md:-left-16"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink/60 transition-colors hover:border-brand hover:text-brand md:-right-16"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => goTo(dotIndex)}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === index ? 'w-8 bg-brand' : 'w-2.5 bg-ink/20 hover:bg-brand/60',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
