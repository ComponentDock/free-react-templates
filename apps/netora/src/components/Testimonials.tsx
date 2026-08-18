import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  return (
    <section aria-label="Testimonials" className="bg-testimonial py-[100px]">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-medium uppercase tracking-wider text-brand">Testimonial</span>
        <h2 className="mt-3 font-display text-4xl font-medium tracking-[-2px] text-navy-deep">
          Love from our client
        </h2>
        <p className="mt-4 text-lg text-body">
          A few words from the teams we have helped along the way.
        </p>

        <div className="relative mt-14">
          {testimonials.map((item, i) => (
            <figure
              key={item.name}
              aria-hidden={i === index ? undefined : 'true'}
              className={cn(
                'transition-opacity duration-500',
                i === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
              )}
            >
              <div className="bg-white px-8 pb-10 pt-12 shadow-lg">
                <h3 className="font-display text-2xl font-medium text-navy">Brilliant work</h3>
                <blockquote className="mt-4 text-base leading-relaxed text-body">
                  “{item.quote}”
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <img
                    src={item.avatar}
                    alt={`Portrait of ${item.name}`}
                    className="size-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className="font-medium text-navy">{item.name}</p>
                    <div
                      className="flex gap-0.5 text-star"
                      role="img"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }, (_, s) => (
                        <Star key={s} aria-hidden="true" className="size-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          ))}

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex size-11 items-center justify-center border border-brand/40 text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex size-11 items-center justify-center border border-brand/40 text-brand transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
