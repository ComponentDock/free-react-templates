import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/** Testimonials carousel (source: .testimony-section owl carousel with 5
 *  slides): circular avatar + quote + name + position, with owl prev/next
 *  arrows below. One slide visible at a time; arrows wrap. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.items.length
  const item = testimonials.items[index]!

  const previous = () => setIndex((current) => (current - 1 + count) % count)
  const next = () => setIndex((current) => (current + 1) % count)

  return (
    <section aria-label="Testimonials" className="bg-soft py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-[2px] text-brand">
          {testimonials.subheading}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-ink lg:text-4xl">{testimonials.heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{testimonials.intro}</p>

        <figure className="mx-auto mt-12 max-w-2xl">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
            <Quote className="h-6 w-6" aria-hidden="true" />
          </span>
          <img
            src={item.image}
            alt={`Portrait of ${item.name}`}
            className="mx-auto mt-6 h-24 w-24 rounded-full object-cover"
            loading="lazy"
          />
          <blockquote className="mt-6 text-lg leading-relaxed text-ink">{item.quote}</blockquote>
          <figcaption className="mt-4">
            <span className="font-semibold text-ink">{item.name}</span>
            <span className="mx-2 text-muted">—</span>
            <span className="text-muted">{item.position}</span>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-ink',
              'transition-colors hover:bg-brand hover:text-white',
            )}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span aria-live="polite" className="text-sm text-muted">
            {index + 1} / {count}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-ink',
              'transition-colors hover:bg-brand hover:text-white',
            )}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
