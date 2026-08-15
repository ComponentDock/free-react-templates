import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  function go(delta: number) {
    setIndex((current) => (current + delta + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" aria-label="Client testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="relative mx-auto max-w-3xl text-center">
          <Quote
            className="mx-auto mb-6 h-12 w-12 rotate-180 text-tint"
            aria-hidden="true"
            strokeWidth={1}
          />

          {testimonials.map((testimonial, i) => (
            <blockquote
              key={testimonial.name}
              aria-hidden={i === index ? undefined : 'true'}
              className={cn('transition-opacity duration-300', i === index ? 'block' : 'hidden')}
            >
              <img
                src={testimonial.photo}
                alt={`Portrait of ${testimonial.name}`}
                className="mx-auto mb-6 h-20 w-20 rounded-full object-cover"
              />
              <p className="text-lg leading-relaxed text-ink md:text-xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div
                className="mt-6 flex items-center justify-center gap-1"
                aria-label="Rated 5 out of 5"
              >
                {Array.from({ length: 5 }, (_, star) => (
                  <Star
                    key={star}
                    data-star
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <footer className="mt-4">
                <p className="text-lg font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-tint text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
