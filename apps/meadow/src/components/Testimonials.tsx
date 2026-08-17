import { Quote } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  return (
    <section id="testimonials" data-testid="testimonial-section" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[1px] text-brand">
            Testimonial
          </span>
          <h2 className="mt-2 text-4xl font-medium text-ink">Happy Customers</h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {testimonials.map((item, i) => (
            <figure
              key={item.name}
              data-slide={i}
              aria-hidden={i === index ? undefined : 'true'}
              className="relative rounded-md bg-white p-8 shadow-[0px_30px_33px_-41px_rgba(0,0,0,0.24)]"
            >
              <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-brand">
                <Quote aria-hidden="true" className="h-5 w-5 text-white" />
              </span>
              <blockquote className="mt-2 text-body">{item.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-ink">{item.name}</p>
                  <span className="text-sm text-body">{item.position}</span>
                </div>
              </figcaption>
            </figure>
          ))}

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-3 w-3 rounded-full transition-colors',
                  i === index ? 'bg-brand' : 'bg-brand/30 hover:bg-brand/60',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
