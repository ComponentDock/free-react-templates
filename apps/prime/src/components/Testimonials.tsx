import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const last = testimonials.length - 1

  return (
    <section id="team" aria-label="Testimonials" className="bg-light py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm text-brand">Our Happy Customer Says</span>
          <h2 className="text-3xl font-normal text-ink">Testimony</h2>
        </div>
        <div
          className="relative"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <blockquote
                  key={testimonial.author}
                  className="min-w-full shrink-0 px-4 text-center"
                  aria-hidden={i !== index ? 'true' : undefined}
                >
                  <Quote className="mx-auto mb-4 h-8 w-8 text-brand" aria-hidden="true" />
                  <p className="mx-auto mb-6 max-w-2xl text-lg text-ink/80">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-ink">{testimonial.author}</p>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous testimonial"
            className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full border border-gray-300 bg-white p-2 text-ink hover:bg-band"
            onClick={() => setIndex((current) => (current === 0 ? last : current - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border border-gray-300 bg-white p-2 text-ink hover:bg-band"
            onClick={() => setIndex((current) => (current === last ? 0 : current + 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.author}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-gray-300',
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
