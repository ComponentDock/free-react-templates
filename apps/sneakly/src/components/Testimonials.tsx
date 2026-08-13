import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/** "Our satisfied customer says" testimonial carousel: one 100px circular
 *  customer photo with a gold quote badge, an 18px quote, a bold name and
 *  a role line; five dots below, the active one gold. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]!

  return (
    <section data-testid="testimonials" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 text-center md:px-8">
        <h2 className="mb-12 text-[40px] font-semibold text-ink">Our satisfied customer says</h2>

        <div className="mx-auto max-w-md">
          <div className="relative mx-auto mb-6 h-[100px] w-[100px]">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              className="h-full w-full rounded-full object-cover"
            />
            <span className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand">
              <Quote className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
          </div>
          <p className="mb-4 text-lg text-body">{testimonial.quote}</p>
          <p className="text-lg font-semibold text-ink">{testimonial.name}</p>
          <span className="text-sm text-body">{testimonial.role}</span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.role}
              type="button"
              aria-label={`Show testimonial ${dotIndex + 1}`}
              aria-current={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                dotIndex === index ? 'bg-brand' : 'bg-[#e6e6e6]',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
