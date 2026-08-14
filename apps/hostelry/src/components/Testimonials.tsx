import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials (source: section.testimonial_area.section_gap — light #f9f9ff
   section with a slider of white quote cards, each with an avatar, name and
   quote; prev/next controls cycle the slides). */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  function goTo(next: number) {
    setIndex(((next % count) + count) % count)
  }

  const current = TESTIMONIALS[index]!

  return (
    <section id="testimonials" className="bg-mist py-[120px]">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-[30px] font-semibold leading-[45px] text-ink sm:text-[36px]">
          Testimonial from our Clients
        </h2>

        <div className="mt-12">
          <figure className="rounded-[10px] border border-[#eeeeee] bg-white p-10 text-left">
            <div className="flex items-center gap-4">
              <img src={current.image} alt="" className="h-14 w-14 rounded-full object-cover" />
              <figcaption className="text-[18px] font-semibold text-ink">{current.name}</figcaption>
            </div>
            <blockquote className="mt-6 text-[15px] leading-[26px] text-smoke">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-ink transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <p aria-live="polite" className="text-[13px] text-smoke">
              {index + 1} / {count}
            </p>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-ink transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
