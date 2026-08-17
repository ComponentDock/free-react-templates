import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { COMMITMENTS } from '../data'

/* Commitment — mint testimonial column with a quote, founder row, and
   prev/next carousel controls. Only the active slide is rendered. */
export function Commitment() {
  const [index, setIndex] = useState(0)
  const slide = COMMITMENTS[index]!
  const total = COMMITMENTS.length

  const next = () => setIndex((current) => (current + 1) % total)
  const prev = () => setIndex((current) => (current - 1 + total) % total)

  return (
    <section aria-label="Commitment" className="flex h-[600px] items-center bg-mint px-10">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-[38px] font-semibold text-forest">Our Commitment</h2>
        <p className="mt-8 text-xl leading-relaxed text-sage">{slide.quote}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <img
            src="https://picsum.photos/seed/gardenly-10/80/80"
            alt={`${slide.author} portrait`}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="text-left">
            <span className="block text-xl font-semibold text-forest">{slide.author}</span>
            <p className="text-sm text-sage">{slide.role}</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sage-pale text-forest transition-colors hover:bg-garden hover:text-paper"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sage-pale text-forest transition-colors hover:bg-garden hover:text-paper"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
