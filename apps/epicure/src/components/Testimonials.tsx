import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

/** Testimonials: light-grey band with eyebrow + heading and a carousel
 *  of centered quotes (square avatar, quote, bold name, Customer). */
export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const count = testimonials.items.length

  const prev = () => setCurrent((value) => (value - 1 + count) % count)
  const next = () => setCurrent((value) => (value + 1) % count)

  return (
    <section id="gallery" aria-label="Testimonials" className="bg-section-grey px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary">
          {testimonials.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-4xl font-semibold uppercase text-body xl:text-5xl">
          {testimonials.heading}
        </h2>
      </div>

      <div className="relative mx-auto mt-12 max-w-2xl">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            data-testid="testimonial-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.items.map((item) => (
              <figure key={item.name} className="w-full shrink-0 px-4 text-center">
                <img
                  src={item.avatar}
                  alt=""
                  className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
                />
                <blockquote className="mx-auto max-w-[500px] text-xl leading-relaxed text-body">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block font-display font-bold text-body">{item.name}</span>
                  <span className="text-sm text-muted">Customer</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-body shadow transition-colors hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-body shadow transition-colors hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === current ? 'true' : undefined}
              onClick={() => setCurrent(index)}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                index === current ? 'bg-primary' : 'bg-black/30 hover:bg-black/50',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
