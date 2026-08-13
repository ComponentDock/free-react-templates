import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'
import { slideIndex } from '../carousel'

/** "What our Customers Says" — testimonial carousel with prev/next arrows
 *  and dots; one card visible at a time. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const go = (delta: number) =>
    setIndex((current) => slideIndex(current, testimonials.length, delta))

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-eyebrow">Testimonials</p>
        <h2 className="mt-3 text-3xl font-medium text-brand-purple lg:text-4xl">
          What our Customers Says
        </h2>

        <div className="mt-12">
          <article className="mx-auto max-w-2xl rounded-lg border border-gray-100 bg-white p-10 shadow-sm">
            <img
              src={`https://picsum.photos/seed/taply-client-${index}/96/96`}
              alt={`${testimonials[index]!.name} avatar`}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <span className="mx-auto mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-brand to-brand-2 text-white">
              <Quote className="h-5 w-5" aria-hidden="true" />
            </span>
            <blockquote className="mt-6 text-lg leading-relaxed text-gray-600">
              {testimonials[index]!.quote}
            </blockquote>
            <h3 className="mt-6 font-medium text-brand-purple">{testimonials[index]!.name}</h3>
            <p className="mt-1 text-sm text-brand">{testimonials[index]!.country}</p>
          </article>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand-purple transition-colors hover:bg-lavender"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  aria-label={`Show testimonial ${dotIndex + 1}`}
                  aria-current={dotIndex === index}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    dotIndex === index ? 'bg-brand' : 'bg-black/20 hover:bg-black/40',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand-purple transition-colors hover:bg-lavender"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
