import { useState } from 'react'
import { Quote, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Pristine transformed our office overnight. The team was quick, careful and left every desk shining.',
    author: 'Robert',
  },
  {
    quote:
      'Our carpets look brand new. Booking took two minutes and the results lasted for months.',
    author: 'Amanda',
  },
  {
    quote: 'Reliable, friendly and thorough — the only cleaning company we have trusted for years.',
    author: 'Daniel',
  },
] as const

/** Centered testimonial slider: quote, five navy stars, author; dot
 *  indicators advance the slides. */
export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="mb-12 text-3xl font-medium text-navy lg:text-4xl">What Our Clients Say</h2>
        <div key={active} className="flex flex-col items-center">
          <Quote className="mb-6 h-10 w-10 text-brand" aria-hidden="true" />
          <p className="text-xl leading-relaxed text-quote underline decoration-brand/30 underline-offset-4">
            {current.quote}
          </p>
          <div className="mt-7 flex gap-1" aria-label={`${active + 1} star rating`}>
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                className="h-5 w-5 fill-navy text-navy"
                aria-label="star"
                aria-hidden={index !== 0}
              />
            ))}
          </div>
          <p className="mt-4 text-sm font-medium text-body">- {current.author}</p>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((slide, index) => (
            <button
              key={slide.author}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show testimonial from ${slide.author}`}
              aria-current={index === active}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                index === active ? 'bg-brand' : 'bg-beige hover:bg-brand/60',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
