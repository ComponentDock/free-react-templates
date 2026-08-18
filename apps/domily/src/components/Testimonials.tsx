import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.slides.length)
  const prev = () =>
    setIndex((current) => (current - 1 + TESTIMONIALS.slides.length) % TESTIMONIALS.slides.length)

  return (
    <section className="flex flex-col items-center bg-white md:flex-row">
      <div className="w-full px-4 py-[90px] md:w-1/2 md:py-24 md:pl-[8%]">
        <h2 className="font-display text-[22px] font-medium text-navy">{TESTIMONIALS.heading}</h2>
        <div className="relative mt-10 overflow-hidden">
          <div
            data-testid="quotes-track"
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.slides.map((slide) => (
              <figure key={slide.name} className="w-full shrink-0 pr-8">
                <blockquote className="font-display text-[31px] font-semibold leading-[1.4] text-navy-ink">
                  {slide.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={slide.avatar}
                    alt={`${slide.name} portrait`}
                    className="size-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-base font-medium text-navy-ink">{slide.name}</h3>
                    <p className="text-sm text-[#74706B]">{slide.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-none border border-cardborder text-navy-ink transition-colors hover:bg-gold hover:text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-none border border-cardborder text-navy-ink transition-colors hover:bg-gold hover:text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={TESTIMONIALS.image}
          alt={TESTIMONIALS.imageAlt}
          className="h-[420px] w-full object-cover md:h-[766px]"
        />
      </div>
    </section>
  )
}
