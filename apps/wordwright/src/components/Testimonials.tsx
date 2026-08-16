import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials, testimonialsTitle } from '../data'

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="bg-cream pb-[140px] pt-[110px]">
      <div className="mx-auto max-w-[860px] px-6 text-center">
        <h2 className="font-display text-[32px] font-bold tracking-[-0.05em] text-ink sm:text-[50px]">
          {testimonialsTitle}
        </h2>
        <div className="mt-[45px]">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              aria-hidden={index !== active ? 'true' : undefined}
              className={cn(index === active ? 'block' : 'hidden')}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.avatarAlt}
                className="mx-auto h-[80px] w-[80px] rounded-full object-cover"
              />
              <blockquote>
                <p className="mx-auto mt-6 max-w-[700px] text-[22px] font-medium leading-relaxed text-ink underline decoration-accent/40 decoration-1 underline-offset-8">
                  {testimonial.quote}
                </p>
              </blockquote>
              <div className="mt-6 flex justify-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} className="h-5 w-5 fill-star text-star" aria-hidden="true" />
                ))}
              </div>
              <figcaption className="mt-3 text-sm text-meta">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
        <ul className="mt-10 flex justify-center gap-2" aria-label="Testimonial carousel">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.name}>
              <button
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  'h-[10px] w-[10px] rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  index === active ? 'bg-accent' : 'bg-ink/30 hover:bg-ink/60',
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
