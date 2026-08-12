import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IMAGES, TESTIMONIALS } from '../data'

/* Testimonials — a 1-up carousel: circular avatar beside the Playfair
   quote mark, the quote and the author; ChevronLeft/ChevronRight arrows
   cycle through the slides. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  // Index is always reduced modulo the slides length, so the lookup is safe.
  const slide = TESTIMONIALS[index]!
  const count = TESTIMONIALS.length

  const showPrevious = () => setIndex((current) => (current - 1 + count) % count)
  const showNext = () => setIndex((current) => (current + 1) % count)

  return (
    <section aria-label="Testimonials" className="py-[100px]">
      <div className="mx-auto flex max-w-[950px] flex-col items-center gap-[50px] px-6 text-center md:flex-row md:gap-[70px] md:text-left">
        <img
          src={IMAGES.avatar}
          alt={slide.name}
          className="h-[170px] w-[170px] shrink-0 rounded-full bg-white object-cover shadow-[0_1px_5px_rgba(0,0,0,0.15)]"
          loading="lazy"
        />
        <div>
          <span
            aria-hidden="true"
            className="block bg-gradient-to-r from-brand-purple to-brand-green bg-clip-text font-serif text-[120px] leading-none text-transparent"
          >
            “
          </span>
          <blockquote className="mt-[-30px] text-[18px] leading-[30px] text-body">
            {slide.quote}
          </blockquote>
          <p className="mt-6 text-base font-semibold text-heading">
            {slide.name} - <span className="text-sm font-normal text-muted">{slide.role}</span>
          </p>
        </div>
      </div>
      <div className="mt-[60px] flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={showPrevious}
          className="flex h-[50px] w-[30px] items-center justify-center text-arrow transition-colors hover:text-heading"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={showNext}
          className="flex h-[50px] w-[30px] items-center justify-center text-arrow transition-colors hover:text-heading"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
