import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/* Testimonials recreated from the source's testimonials_area: a dark band
   with a centered carousel of three quotes — quote icon, white 18px name,
   five yellow stars, and an italic 18px quote — with prev/next arrows and
   dot navigation. */

function Stars() {
  return (
    <ul aria-label="5 star rating" className="flex justify-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <li key={index}>
          <Star className="h-4 w-4 fill-star text-star" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const slideIndex = ((index % count) + count) % count
  const current = TESTIMONIALS[slideIndex] as (typeof TESTIMONIALS)[number]

  const goTo = (next: number) => setIndex(((next % count) + count) % count)

  return (
    <section id="testimonials" className="bg-purple-deep py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
        <div className="mt-6">
          <h4 className="font-display text-lg font-semibold text-white">{current.name}</h4>
          <div className="mt-3">
            <Stars />
          </div>
          <p className="mx-auto mt-6 max-w-[555px] text-lg italic leading-relaxed text-white">
            {current.quote}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:text-purple-ink"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to slide ${dotIndex + 1}`}
                aria-current={index === dotIndex}
                onClick={() => goTo(dotIndex)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  index === dotIndex ? 'bg-brand' : 'bg-white/30 hover:bg-white/60',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:text-purple-ink"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
