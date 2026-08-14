import { Quote } from 'lucide-react'
import { testimonials } from '../data'

/** Emblem testimonials: three white cards on a light band — round avatar,
 *  18px quote and name + role, with the reference soft shadow. */
export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-light text-brand lg:text-[2.5rem]">Our Top Client Says</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/80">
          A few words from the teams we have had the pleasure of working with.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="bg-white px-8 py-10 text-left shadow-[0_5px_30px_-5px_rgba(0,0,0,0.1)]"
            >
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`Portrait of ${testimonial.name}`}
                  className="h-[50px] w-[50px] rounded-full object-cover"
                  width={50}
                  height={50}
                />
                <div>
                  <div className="font-bold text-ink">{testimonial.name}</div>
                  <div className="text-sm text-ink/70">{testimonial.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
