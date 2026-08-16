import { testimonial } from '../data'

/* Reference: div.testimonial-area (cream #F3EAD8 band) — "Customer
   Testimonial" heading, quote copy, and a founder row with an avatar,
   author name and role (recreated without any external attribution). */
export function Testimonial() {
  return (
    <section aria-label="Customer testimonial" className="bg-testimonial py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-[34px]">{testimonial.heading}</h2>
        <p className="mt-4 text-lg text-copy">{testimonial.quote}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.avatarAlt}
            loading="lazy"
            className="h-14 w-14 rounded-full object-cover"
          />
          <p className="text-left">
            <span className="block font-heading text-base font-medium text-charcoal">
              {testimonial.author}
            </span>
            <span className="text-sm text-copy">{testimonial.role}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
