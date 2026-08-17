import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials, testimonialsTitle } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const previous = () => setIndex((current) => (current === 0 ? count - 1 : current - 1))
  const next = () => setIndex((current) => (current + 1) % count)

  return (
    <section aria-label="Testimonials" className="bg-light py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10">
          <div aria-hidden="true" className="mb-4 h-[2px] w-[50px] bg-brand" />
          <h2 className="font-serif text-[40px] font-bold text-ink">{testimonialsTitle}</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((person, i) => (
                <figure
                  key={person.name}
                  aria-hidden={i !== index ? 'true' : undefined}
                  className="w-full shrink-0 px-1"
                >
                  <div className="flex flex-col items-stretch bg-white shadow-[0_15px_30px_0_rgba(0,0,0,0.1)] lg:flex-row">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-64 w-full object-cover lg:h-auto lg:w-[400px] lg:shrink-0"
                    />
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <span
                        aria-hidden="true"
                        className="font-['Georgia',serif] text-[100px] leading-[0.6] text-brand"
                      >
                        {'\u201C'}
                      </span>
                      <blockquote className="mt-2 text-[30px] leading-[1.3] text-ink">
                        {person.quote}
                      </blockquote>
                      <figcaption className="mt-4">
                        <span className="font-semibold text-ink">{person.name}</span>{' '}
                        <span className="text-black/50">— {person.role}</span>
                      </figcaption>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:text-brand lg:flex"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:text-brand lg:flex"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((person, i) => (
            <button
              key={person.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-neutral-300 hover:bg-neutral-400',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
