import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { nextSlideLabel, previousSlideLabel, slideLabelPrefix, testimonials } from '../data'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const goToNext = () => setCurrent((value) => (value + 1) % testimonials.length)
  const goToPrevious = () =>
    setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length)

  return (
    <section aria-label="Testimonials" className="bg-soft py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative mx-auto max-w-3xl">
          {testimonials.map((testimonial, index) =>
            index === current ? (
              <figure key={testimonial.author} className="text-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.author}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />
                <blockquote className="mx-auto mt-8 max-w-2xl font-sans text-lg leading-8 text-navy">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 font-sans text-base text-muted">
                  {testimonial.author}
                </figcaption>
              </figure>
            ) : null,
          )}

          <button
            type="button"
            aria-label={previousSlideLabel}
            onClick={goToPrevious}
            className="absolute -left-16 top-1/2 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1F1F1F] transition-colors hover:bg-swiper-accent hover:text-white md:flex"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={nextSlideLabel}
            onClick={goToNext}
            className="absolute -right-16 top-1/2 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1F1F1F] transition-colors hover:bg-swiper-accent hover:text-white md:flex"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                aria-label={`${slideLabelPrefix} ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={cn(
                  'h-3 w-3 rounded-full',
                  index === current ? 'bg-swiper-accent' : 'bg-slate-300',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
