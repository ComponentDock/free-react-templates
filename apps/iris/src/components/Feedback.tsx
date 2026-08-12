import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FEEDBACK_TEXT, FEEDBACK_TITLE, TESTIMONIALS } from '../data'

/**
 * Feedback — light rounded panel with a "Client's Feedback" heading on the
 * left and a white shadowed card on the right cycling through the client
 * slides with prev/next controls.
 */
export function Feedback() {
  const [index, setIndex] = useState(0)
  const slide = TESTIMONIALS[index]!

  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.length)
  const prev = () =>
    setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section id="feedback" className="bg-white pb-[120px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-[10px] bg-light py-16 lg:py-[100px]">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:pl-[95px] lg:pr-[55px]">
              <h3 className="mb-4 font-serif text-3xl text-ink md:text-[36px]">{FEEDBACK_TITLE}</h3>
              <p className="text-sm">{FEEDBACK_TEXT}</p>
            </div>
            <div className="lg:col-span-7 lg:mr-[95px]">
              <div className="rounded-[10px] bg-white p-10 shadow-[0px_10px_30px_0px_rgba(157,157,157,0.2)]">
                <div className="flex items-start gap-6">
                  <img
                    src={slide.avatar}
                    alt=""
                    className="h-[90px] w-[90px] shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="italic leading-relaxed">{slide.quote}</p>
                    <h4 className="mt-5 text-lg text-ink">{slide.name}</h4>
                    <h5 className="text-sm font-normal text-body">{slide.role}</h5>
                  </div>
                </div>
                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
