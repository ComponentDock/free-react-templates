import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const lastIndex = TESTIMONIALS.slides.length - 1

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div role="region" aria-label="Testimonials" data-index={index} className="overflow-hidden">
          <ul
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.slides.map((slide) => (
              <li key={slide.quote} className="w-full shrink-0">
                <Quote aria-hidden="true" className="mx-auto mb-6 h-10 w-10 text-gold" />
                <p className="mx-auto max-w-3xl text-2xl italic leading-relaxed">{slide.quote}</p>
                <div className="mt-8">
                  <h5 className="text-lg">{slide.author}</h5>
                  <p className="text-sm">{slide.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            disabled={index === 0}
            onClick={() => setIndex((value) => Math.max(0, value - 1))}
            className="flex h-10 w-10 items-center justify-center border border-[#eeeeee] text-heading disabled:opacity-40"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.slides.map((slide, slideIndex) => (
              <button
                key={slide.author + slideIndex}
                type="button"
                aria-label={`Show testimonial ${slideIndex + 1}`}
                aria-current={slideIndex === index}
                onClick={() => setIndex(slideIndex)}
                className="h-3 w-3 border border-gold aria-[current=true]:bg-gold"
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            disabled={index === lastIndex}
            onClick={() => setIndex((value) => Math.min(lastIndex, value + 1))}
            className="flex h-10 w-10 items-center justify-center border border-[#eeeeee] text-heading disabled:opacity-40"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
