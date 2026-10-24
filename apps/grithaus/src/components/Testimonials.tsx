import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const current = testimonials[index % total] as (typeof testimonials)[number]

  return (
    <div>
      <h4 className="mb-[25px] text-[16px] lowercase text-white">testimonials</h4>
      <blockquote className="m-0">
        <p className="text-[13px] italic leading-[1.9] text-quote">“ {current.quote} ”</p>
        <cite className="mt-4 block text-[13px] font-semibold not-italic text-brand">
          {current.author}
        </cite>
      </blockquote>
      <div className="mt-5 flex gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((value) => (value - 1 + total) % total)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((value) => (value + 1) % total)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
