import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials (source: div.testimonial_area owl-carousel — "Client say
   about me" title, six slides: avatar, name and quote on a white card
   with a soft shadow). The carousel shows one slide at a time with
   prev/next controls. */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.length)
  const prev = () =>
    setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  const slide = TESTIMONIALS[index]!

  return (
    <section id="testimonials" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mx-auto mb-16 max-w-[540px] text-center">
          <h2 className="font-heading text-[36px] font-bold text-primary">Client say about me</h2>
          <p className="mt-4 text-[16px] leading-[25px] text-muted">
            Replenish man have thing gathering lights yielding shall you.
          </p>
        </div>

        <div className="mx-auto max-w-[860px]">
          <figure className="bg-white p-[50px_55px] shadow-[0_15px_30px_0_rgba(221,221,221,0.3)]">
            <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
              <img
                src={slide.image}
                alt=""
                loading="lazy"
                className="h-[100px] w-[100px] shrink-0 rounded-full object-cover"
              />
              <div>
                <blockquote className="text-[16px] leading-[25px] text-muted">
                  {slide.quote}
                </blockquote>
                <h3 className="mt-4 font-heading text-[18px] font-medium text-primary">
                  {slide.name}
                </h3>
              </div>
            </div>
          </figure>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
