import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-4xl font-bold text-dark">Guest Reviews</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          What our guests say about their experience at Sovereign Hotel.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg border border-gray-100 bg-offwhite p-8 text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div className="mx-auto mt-3 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 font-heading text-lg font-semibold text-dark">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
