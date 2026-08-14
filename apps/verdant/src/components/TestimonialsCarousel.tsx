import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'
import { slideIndex } from '../carousel'

/** Testimonials carousel: four slides (circular avatar, name, italic quote)
 *  with white prev/next arrows and dots below center. */
export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  const go = (delta: number) =>
    setIndex((current) => slideIndex(current, testimonials.length, delta))

  const testimonial = testimonials[index]!

  return (
    <section aria-label="Testimonials" className="bg-ink py-14 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="heading-underline font-heading inline-block pb-3 text-3xl font-semibold uppercase text-white">
          Testimonials
        </h2>

        <article className="mt-12">
          <img
            src={testimonial.image}
            alt={`${testimonial.name} avatar`}
            className="mx-auto h-20 w-20 rounded-full object-cover"
          />
          <blockquote className="mt-6 text-2xl italic leading-relaxed text-white/80">
            {testimonial.quote}
          </blockquote>
          <h3 className="mt-6 text-lg font-semibold text-white">{testimonial.name}</h3>
        </article>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={cn(
                  'h-2.5 w-2.5 transition-colors',
                  dotIndex === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
