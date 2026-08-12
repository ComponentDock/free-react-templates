import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials — carousel showing one quote at a time with prev/next
   controls that wrap around. */

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.items.length
  const item = TESTIMONIALS.items[index]!

  const next = () => setIndex((current) => (current + 1) % count)
  const prev = () => setIndex((current) => (current - 1 + count) % count)

  return (
    <section id="testimonials-section" className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
          {TESTIMONIALS.heading}
        </h2>
        <div className="mt-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <Quote className="h-7 w-7 text-accent" aria-hidden="true" />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-[18px] leading-relaxed text-gray-600 dark:text-gray-300">
            {item.quote}
          </p>
          <p className="mt-6 text-[18px] font-semibold text-navy dark:text-white">{item.name}</p>
          <p className="mt-1 text-[15px] text-gray-500">{item.role}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label={TESTIMONIALS.previous}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={TESTIMONIALS.next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
