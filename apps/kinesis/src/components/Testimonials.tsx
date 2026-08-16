import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/* Light-background testimonial carousel: quote card with name and
   position, left/right controls and bar indicators. */
export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const previous = () => {
    setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setCurrent((value) => (value + 1) % testimonials.length)
  }

  const testimonial = testimonials[current]!

  return (
    <section aria-label="Testimonials" className="bg-section py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
            Testimonial
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-heading lg:text-[34px]">
            Happy People
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <figure>
            <Quote className="mx-auto h-9 w-9 text-primary" aria-hidden="true" />
            <blockquote className="mt-6 text-lg leading-relaxed text-neutral-600">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-display text-[22px] font-bold uppercase italic text-heading">
                {testimonial.name}
              </p>
              <p className="mt-1 text-[13px] uppercase tracking-wide text-neutral-500">
                {testimonial.position}
              </p>
            </figcaption>
          </figure>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previous}
              className="text-neutral-400 transition-colors hover:text-primary"
            >
              <ChevronLeft className="h-7 w-7" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2" aria-label="Testimonial indicators">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === current ? 'true' : undefined}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    index === current ? 'bg-primary' : 'bg-neutral-300 hover:bg-neutral-400',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="text-neutral-400 transition-colors hover:text-primary"
            >
              <ChevronRight className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
