import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/* Testimonials (source: div.testimonial-area — slick carousel of THREE
   slides: quote icon + quote + avatar + author line; recreated as a small
   state-driven carousel with prev/next arrows and dot indicators). The
   demo author credit is paraphrased without the brand reference. */
export function Testimonials() {
  const [current, setCurrent] = useState(0)
  // current is always a valid index (modulo arithmetic keeps it in range).
  const slide = testimonials.slides[current]!

  const showSlide = (index: number) =>
    setCurrent((index + testimonials.slides.length) % testimonials.slides.length)

  return (
    <section id="testimonials" className="bg-band py-[120px]">
      <div className="mx-auto max-w-[1200px] px-[15px]">
        <figure className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
          <blockquote className="mt-6 text-xl italic leading-relaxed text-navy">
            {slide.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <img
              src="https://picsum.photos/id/1027/80/80"
              alt={slide.author}
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-base font-medium text-navy">{slide.author}</span>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => showSlide(current - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-navy transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {testimonials.slides.map((s, index) => (
              <button
                key={s.author}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === current}
                onClick={() => showSlide(index)}
                className={cn(
                  'h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  index === current ? 'w-6 bg-brand' : 'w-2.5 bg-gray-300 hover:bg-brand',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => showSlide(current + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-navy transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
