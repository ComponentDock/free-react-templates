import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* People talking about — testimonial slider (2 slides) with a quote card
   on the pale blue-grey background and a founder row (circular portrait,
   name, role). Only the active slide is rendered. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length
  const slide = TESTIMONIALS[index]!

  const next = () => setIndex((prev) => (prev + 1) % total)
  const prev = () => setIndex((prev) => (prev - 1 + total) % total)

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl font-semibold text-black">People talking about</h2>

        <div className="mt-10">
          <div className="rounded-[5px] bg-section px-10 py-8 text-left">
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
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-brand"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-brand"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
