import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data'
import { cn } from '@free-react-templates/ui'

/**
 * "Clients Says" testimonial carousel over a photo background with a white
 * overlay: round avatar with a pink quote badge, quote, pink name, and
 * position. Prev/next arrows plus dots cycle through the quotes.
 */
export function Testimonials() {
  const [active, setActive] = useState(0)
  const item = testimonials.items[active]!

  const prev = () =>
    setActive((current) => (current - 1 + testimonials.items.length) % testimonials.items.length)
  const next = () => setActive((current) => (current + 1) % testimonials.items.length)

  return (
    <section
      aria-label="Client testimonials"
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/glamour-testimonials-bg/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-white/92" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-wide text-ink uppercase">
          {testimonials.heading}
        </h2>

        <div aria-live="polite" className="mt-10">
          <div className="relative mx-auto h-24 w-24">
            <img
              src={item.avatar}
              alt=""
              className="h-24 w-24 rounded-full object-cover"
              loading="lazy"
            />
            <span className="absolute -right-1 -bottom-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
              <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-8 text-lg leading-relaxed italic">&ldquo;{item.quote}&rdquo;</p>
          <p className="mt-6 font-heading text-lg font-bold text-brand">{item.name}</p>
          <p className="mt-1 text-sm uppercase tracking-wider">{item.position}</p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {testimonials.items.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => setActive(index)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  index === active ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
