import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const slide = testimonials.quotes[index]!

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.1em] text-brand">
          {testimonials.subheading}
        </span>
        <h2 className="text-3xl font-bold text-black sm:text-4xl">{testimonials.heading}</h2>
      </div>
      <div className="mx-auto mt-14 max-w-4xl px-6 text-center">
        <div className="bg-white px-8 py-12 sm:px-14">
          <h3 className="text-lg font-bold text-black">{testimonials.itemHeading}</h3>
          <blockquote className="mt-6 text-lg italic text-black">&ldquo;{slide}&rdquo;</blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src={testimonials.avatar}
              alt={`${testimonials.author} portrait`}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-left">
              <strong className="block text-base font-bold text-black">
                {testimonials.author}
              </strong>
              <span className="text-sm">{testimonials.role}</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            disabled={index === 0}
            onClick={() => setIndex((current) => current - 1)}
            className={cn(
              'rounded-[30px] bg-brand px-5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
              index === 0 && 'cursor-not-allowed opacity-50',
            )}
          >
            {testimonials.prevLabel}
          </button>
          <div className="flex items-center gap-2">
            {testimonials.quotes.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'h-2 w-2 rounded-full bg-black/20 transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  dotIndex === index && 'bg-brand',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            disabled={index === testimonials.quotes.length - 1}
            onClick={() => setIndex((current) => current + 1)}
            className={cn(
              'rounded-[30px] bg-brand px-5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
              index === testimonials.quotes.length - 1 && 'cursor-not-allowed opacity-50',
            )}
          >
            {testimonials.nextLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
