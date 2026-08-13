import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

/* Centered testimonials carousel showing one quote at a time with
   accessible prev/next controls (reference: .slide-one-item). */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const step = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {testimonials.map((item, itemIndex) => (
          <blockquote
            key={item.name}
            aria-hidden={itemIndex !== index}
            className={cn(itemIndex === index ? 'block' : 'hidden')}
          >
            <Quote className="mx-auto mb-6 h-9 w-9 text-brand" aria-hidden="true" />
            <p className="text-lg italic leading-relaxed text-gray-700">{item.quote}</p>
            <cite className="mt-5 block text-sm not-italic">
              <span className="font-semibold text-black">{item.name}</span>
              <span className="text-gray-500"> — {item.role}</span>
            </cite>
          </blockquote>
        ))}

        <div className="mt-9 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => step(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => step(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
