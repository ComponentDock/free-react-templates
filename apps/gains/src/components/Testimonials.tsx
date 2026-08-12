import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Testimonials — gray-background section with three customer quotes, each
 * with a name and role.
 */
export function Testimonials() {
  return (
    <section className="bg-graybg py-24 lg:py-35">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading kicker="Testimonials" title="happy customer says" />
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="bg-white p-8 shadow-sm">
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-body">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold uppercase text-ink">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wide text-secondary">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
