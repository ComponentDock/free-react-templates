import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const previous = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-brand">
            Testimonial
          </span>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Our Successful Students</h2>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const active = index === activeIndex
            return (
              <figure
                key={testimonial.name}
                data-active={active ? 'true' : undefined}
                className={cn(
                  'flex flex-col justify-between rounded-lg p-8 shadow-sm transition-colors',
                  active ? 'bg-brand text-white' : 'bg-paper text-ink',
                )}
              >
                <div>
                  <Quote
                    aria-hidden="true"
                    className={cn('mb-4 size-6', active ? 'text-white' : 'text-brand')}
                  />
                  <blockquote
                    className={cn('text-sm leading-relaxed', active ? 'text-white' : 'text-body')}
                  >
                    {testimonial.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'flex size-11 items-center justify-center rounded-full text-xs font-bold',
                      active ? 'bg-white/20 text-white' : 'bg-light text-brand',
                    )}
                  >
                    {testimonial.initials}
                  </span>
                  <span>
                    <span
                      className={cn(
                        'block text-sm font-semibold',
                        active ? 'text-white' : 'text-ink',
                      )}
                    >
                      {testimonial.name}
                    </span>
                    <span className={cn('block text-xs', active ? 'text-white/80' : 'text-body')}>
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="flex size-10 items-center justify-center rounded-full border border-body text-body transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'size-2.5 rounded-full transition-colors',
                index === activeIndex ? 'bg-brand' : 'bg-body/40',
              )}
            >
              <span className="sr-only">{testimonial.name}</span>
            </button>
          ))}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex size-10 items-center justify-center rounded-full border border-body text-body transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
