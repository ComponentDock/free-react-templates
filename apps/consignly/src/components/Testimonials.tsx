import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Testimonials — "Happy Customer" slider: one slide at a time with an
   80px circular avatar, name, role, quote, dot pagination, and square
   prev/next controls. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const slide = TESTIMONIALS[index]!

  function goPrev() {
    setIndex((value) => (value - 1 + count) % count)
  }

  function goNext() {
    setIndex((value) => (value + 1) % count)
  }

  return (
    <div>
      <span className="text-[11px] font-bold uppercase tracking-[.1rem] text-label">
        Testimonials
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-black">Happy Customer</h2>

      <div className="mt-10 max-w-xl">
        <div className="flex items-start gap-4">
          <img
            src={slide.image}
            alt={`Portrait of ${slide.author}`}
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
          <div>
            <h3 className="font-display text-lg font-bold text-black">{slide.author}</h3>
            <p className="mt-1 text-sm text-muted">{slide.role}</p>
          </div>
        </div>
        <blockquote className="mt-6 border-l-4 border-accent pl-4 text-lg leading-8 text-ink">
          {slide.quote}
        </blockquote>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((item, dotIndex) => (
              <button
                key={item.author}
                type="button"
                aria-label={`Show testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'h-2 w-2 rounded-full bg-[#ccc] transition-colors hover:bg-brand',
                  dotIndex === index && 'bg-brand',
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded bg-[#efefef] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded bg-[#efefef] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
