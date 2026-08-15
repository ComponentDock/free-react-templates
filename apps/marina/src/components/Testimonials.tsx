import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () =>
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((current) => (current + 1) % testimonials.length)

  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
          What Customer Saying...
        </h2>

        <div
          className="relative mt-14"
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.author}
              aria-hidden={active !== index}
              className={cn(
                'transition-opacity duration-500',
                active === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
              )}
            >
              <p className="font-serif text-2xl text-body">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-8">
                <p className="text-lg font-bold text-ink">{testimonial.author}</p>
                <p className="mt-1 font-heading text-sm font-bold uppercase tracking-wide text-brand">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
