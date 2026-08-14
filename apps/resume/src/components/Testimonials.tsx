import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

const SLIDE_MS = 6000

/** Testimonial slider: heading + three cards (photo, name, role, quote)
 *  auto-advancing on a timer with dot controls. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % testimonials.items.length),
      SLIDE_MS,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-serif text-4xl font-semibold text-ink lg:text-[48px] lg:leading-tight">
          {testimonials.heading}
        </h2>

        <div className="relative mt-14">
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            className="flex overflow-hidden"
          >
            {testimonials.items.map((item, i) => (
              <figure
                key={i}
                aria-hidden={i !== index}
                className={cn(
                  'w-full shrink-0 px-2 text-center transition-opacity duration-500',
                  i !== index && 'hidden',
                )}
              >
                <img
                  src={item.photo}
                  alt={`${item.name} portrait`}
                  width={80}
                  height={80}
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
                <blockquote className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-5">
                  <span className="block text-lg font-medium text-ink">{item.name}</span>
                  <span className="mt-1 block text-sm text-brand">{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-brand' : 'bg-gray-300',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
