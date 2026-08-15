import { testimonial } from '../data'
import { SectionHeading } from './SectionHeading'

/** Happy Clients testimonial card (quote, photo, name, role). */
export function Testimonials() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label="Testimonial" title="Happy Clients" />
        <div className="mx-auto max-w-[760px] rounded-lg bg-white p-8 text-center shadow-[0px_5px_27px_-14px_rgba(0,0,0,0.14)]">
          <p className="mb-6 text-lg text-body">{testimonial.quote}</p>
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
          />
          <p className="text-lg font-semibold text-ink">{testimonial.name}</p>
          <p className="text-body">{testimonial.role}</p>
        </div>
      </div>
    </section>
  )
}
