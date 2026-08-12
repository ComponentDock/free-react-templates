import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../data'

/**
 * Testimonials — "What Customer's Say About Us" carousel of black-bordered
 * cards (circular avatar, name, role, quote) with accessible next/previous
 * controls and red-active dot indicators.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  const active = TESTIMONIALS[index]!

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="text-4xl font-bold text-ink lg:text-5xl">
            What Customer&apos;s Say About Us
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative border-2 border-black px-8 py-12 text-center sm:px-14">
            <img
              src={active.avatar}
              alt=""
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <h4 className="mt-5 text-base text-black">{active.name}</h4>
            <span className="mt-1 block text-sm text-body">{active.role}</span>
            <p className="mt-6 text-base leading-relaxed text-body">{active.quote}</p>

            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-body transition-colors hover:text-brand"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-body transition-colors hover:text-brand"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-3">
            {TESTIMONIALS.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => setIndex(dotIndex)}
                className={cn(
                  'h-3.5 w-3.5 transition-colors',
                  dotIndex === index ? 'bg-brand' : 'bg-line hover:bg-body',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
