import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/* Testimonial slider: four quote slides with author names and carousel dots
 * (source #testimonials-section .slide-one-item). */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.items.length

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count)
  }

  return (
    <section id="testimonials" data-testid="testimonials" className="py-20 md:py-28">
      <h2 className="text-center text-4xl font-black leading-tight text-brand md:text-[40px]">
        {testimonials.title}
      </h2>

      <div className="relative mx-auto mt-14 max-w-3xl px-4">
        {testimonials.items.map((item, slideIndex) => (
          <div
            key={item.author}
            data-testid="testimonial-slide"
            aria-hidden={slideIndex !== index}
            className={cn('text-center', slideIndex === index ? 'block' : 'hidden')}
          >
            <p className="text-xl font-light italic leading-relaxed text-ink">{item.quote}</p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.1em] text-brand">
              {item.author}
            </p>
          </div>
        ))}

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.items.map((item, dotIndex) => (
            <button
              key={item.author}
              type="button"
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              aria-current={dotIndex === index ? 'true' : undefined}
              onClick={() => goTo(dotIndex)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                dotIndex === index ? 'w-8 bg-brand' : 'w-2.5 bg-gray-300 hover:bg-brand/50',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
