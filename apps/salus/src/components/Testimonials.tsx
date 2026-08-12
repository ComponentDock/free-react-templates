import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const prev = () => setIndex((current) => (current - 1 + total) % total)
  const next = () => setIndex((current) => (current + 1) % total)

  const slide = testimonials[index]!

  return (
    <section aria-label="Testimonials" className="relative py-44">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <Quote className="mx-auto h-10 w-10 text-white" aria-hidden="true" />
        <blockquote className="mt-7 text-xl leading-8 text-white">{slide.quote}</blockquote>
        <p className="mt-7 text-lg text-white">{slide.author}</p>
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={prev}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/40"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={next}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white hover:bg-white/40"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </section>
  )
}
