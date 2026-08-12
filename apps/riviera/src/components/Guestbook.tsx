import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Guestbook — the testimonials section: a 60px "Guestbook" title over two
   dated quote cards with orange star ratings, circular avatars, peach
   author names and locations. */
export function Guestbook() {
  return (
    <section aria-label="Guestbook" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-[44px] font-semibold text-ink md:text-[60px]">Guestbook</h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name}>
              <figcaption className="sr-only">{testimonial.name} guestbook entry</figcaption>
              <p className="text-[11px] uppercase tracking-[1.2px] text-ink/50">
                {testimonial.date}
              </p>
              <blockquote className="mt-4">
                <p className="text-2xl font-semibold text-ink">{testimonial.quote}</p>
                <div role="img" aria-label="5 star rating" className="mt-3 flex gap-1 text-star">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="h-5 w-5 fill-star" />
                  ))}
                </div>
                <p className="mt-4 max-w-lg text-sm font-medium leading-[28px] text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                  gravida.
                </p>
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="h-[54px] w-[54px] rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-semibold text-brand">{testimonial.name}</p>
                  <p className="text-xs text-ink">{testimonial.location}</p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
