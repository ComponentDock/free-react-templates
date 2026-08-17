import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/* Dark-green band with a dot carousel of customer quotes; slides advance
   automatically and via the dot buttons. */
export function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      aria-label="Testimonials"
      className="relative isolate overflow-hidden bg-brand-deep py-[110px]"
    >
      <Quote
        aria-hidden="true"
        className="absolute -top-8 left-4 size-40 rotate-180 text-white/5"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {TESTIMONIALS.map((testimonial, index) => (
          <figure
            key={testimonial.name}
            aria-hidden={active === index ? undefined : 'true'}
            className={cn('mx-auto max-w-3xl', active !== index && 'hidden')}
          >
            <blockquote className="text-2xl font-semibold leading-[1.6] text-quote">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <img
                src={testimonial.avatar}
                alt=""
                loading="lazy"
                className="size-12 rounded-full object-cover"
              />
              <span className="text-left">
                <span className="block font-semibold text-white">{testimonial.name}</span>
                <span className="block text-sm text-quote">{testimonial.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}

        <div className="mt-8 flex justify-center gap-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={active === index ? 'true' : undefined}
              onClick={() => setActive(index)}
              className={cn(
                'size-2.5 rounded-full transition-colors',
                active === index ? 'bg-brand' : 'bg-white/30',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
