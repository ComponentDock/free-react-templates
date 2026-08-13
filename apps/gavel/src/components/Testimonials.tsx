import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data'

/** Centered-heading testimonial slider: one quote card at a time with
 *  previous/next controls and slide dots. */
export function Testimonials() {
  const [active, setActive] = useState(0)
  const count = testimonials.length
  const slide = testimonials[active]!

  const previous = () => setActive((current) => (current - 1 + count) % count)
  const next = () => setActive((current) => (current + 1) % count)

  return (
    <section aria-label="Testimonials" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Testimonial</p>
          <h2 className="mt-4 text-4xl font-bold text-gray-900">Happy Clients</h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <figure className="rounded bg-white p-10 text-center shadow-[0px_5px_21px_-14px_rgba(0,0,0,0.14)]">
            <Quote className="mx-auto h-10 w-10 text-brand" />
            <blockquote className="mt-6 text-lg leading-relaxed text-gray-700">
              &ldquo;{slide.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <img
                src={slide.photo}
                alt={slide.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <span className="text-left">
                <span className="block font-bold text-gray-900">{slide.name}</span>
                <span className="block text-sm font-medium text-brand">{slide.role}</span>
              </span>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previous}
              className="rounded-full border border-gray-300 p-2 text-gray-700 transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => setActive(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === active ? 'bg-brand' : 'bg-gray-300 hover:bg-brand/60'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="rounded-full border border-gray-300 p-2 text-gray-700 transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
