import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Marvel Maison',
    role: 'Chief Executive, Amazon',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero dolore officiis, velit id libero illum harum hic magni, quae repellendus voluptatibus.',
  },
  {
    name: 'Marvel Maison',
    role: 'Chief Executive, Amazon',
    quote:
      'Crafted delivered beyond our expectations. The team listened, designed with intent, and shipped a product our customers genuinely love using every day.',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="bg-ink py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-primary-400" aria-hidden="true" />

        <div className="mt-8 min-h-44">
          {testimonials.map((testimonial, i) =>
            i === index ? (
              <figure key={`${testimonial.name}-${i}`} aria-label={testimonial.name}>
                <blockquote className="text-xl italic leading-relaxed text-gray-200 sm:text-2xl">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="font-bold text-primary-300">{testimonial.name}</span>
                  <span className="text-gray-400"> — {testimonial.role}</span>
                </figcaption>
              </figure>
            ) : null,
          )}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded border border-gray-600 text-gray-300 transition-colors hover:bg-primary-500 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((testimonial, i) => (
              <button
                key={`${testimonial.name}-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-primary-400' : 'bg-gray-600 hover:bg-gray-500',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded border border-gray-600 text-gray-300 transition-colors hover:bg-primary-500 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
