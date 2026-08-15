import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials — light #f8faff band with a centered heading + subtitle
   and five testimonial cards (avatar, quote, name + role), three per row
   on desktop. */
export function Testimonials() {
  return (
    <section id="testimonial" aria-label="Customer Says" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Customer Says</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">Our satisfied customer says</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-sm bg-white p-8 shadow-sm">
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={`${testimonial.name} portrait`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-ink">{testimonial.name}</div>
                  <div className="text-xs text-muted">{testimonial.position}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
