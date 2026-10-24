import { Star } from 'lucide-react'
import { image, testimonialStars, testimonials } from '../data'

/** Brand-green testimonial band, three quote cards in a reachable row. */
export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-brand py-12 lg:py-24">
      <div className="mx-auto max-w-[1140px] px-4">
        <ul className="flex snap-x snap-mandatory gap-10 overflow-x-auto pb-2">
          {testimonials.map((testimonial, index) => (
            <li
              key={`${testimonial.seed}-${index}`}
              className="flex min-w-[280px] flex-1 snap-start items-start gap-6"
            >
              <img
                src={image(testimonial.seed, 180, 180)}
                alt={`${testimonial.name} portrait`}
                className="h-[90px] w-[90px] shrink-0 object-cover"
                loading="lazy"
              />
              <div>
                <span className="block text-[13px] text-white/30">{testimonial.role}</span>
                <h3 className="mb-4 text-[20px] text-white">{testimonial.name}</h3>
                <p className="text-white/90">{testimonial.quote}</p>
                <div className="mt-4 flex gap-1 text-white">
                  {Array.from({ length: testimonialStars }, (_, starIndex) => (
                    <Star
                      key={`${testimonial.seed}-star-${starIndex}`}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
