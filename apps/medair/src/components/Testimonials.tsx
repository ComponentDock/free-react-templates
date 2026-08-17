import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { cn } from '@free-react-templates/ui'

/** Testimonials — client-side slider: photo side + quote card with founder
    row; prev/next arrows and dot indicators. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const slide = TESTIMONIALS[index]!

  const next = () => setIndex((current) => (current + 1) % count)
  const previous = () => setIndex((current) => (current - 1 + count) % count)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
          Testimonial
        </p>
        <h2 className="mt-3 text-center font-display text-4xl text-dark sm:text-5xl">
          Successful Stories
        </h2>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <img
            src={slide.image}
            alt=""
            className="hidden h-[420px] w-full rounded-md object-cover lg:block"
            loading="lazy"
          />
          <div className="relative rounded-md bg-white p-10 shadow-lg">
            <div className="absolute -top-5 right-8 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
              <Quote className="h-5 w-5 fill-current" aria-hidden="true" />
            </div>
            <blockquote className="text-lg leading-relaxed text-black/50">{slide.quote}</blockquote>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={slide.face}
                alt=""
                className="h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-bold text-dark">{slide.name}</h3>
                <p className="text-[13px] font-semibold uppercase tracking-widest text-brand">
                  {slide.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white transition-colors hover:bg-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2" role="group" aria-label="Testimonial slides">
            {TESTIMONIALS.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to slide ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  dotIndex === index ? 'bg-[#999]' : 'bg-[#ddd]',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-dark text-white transition-colors hover:bg-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
