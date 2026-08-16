import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { scrollLeftLabel, scrollRightLabel, sectionHeadings, testimonials } from '../data'

const WINDOW = 3

export function Testimonials() {
  const [start, setStart] = useState(0)
  const lastStart = testimonials.length - WINDOW
  const visible = testimonials.slice(start, start + WINDOW)

  const prev = () => setStart((current) => Math.max(0, current - 1))
  const next = () => setStart((current) => Math.min(lastStart, current + 1))
  const goTo = (index: number) => setStart(Math.min(index, lastStart))

  return (
    <section aria-label="Testimonials" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-bold uppercase text-brand">
            {sectionHeadings.testimonialSub}
          </span>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-ink lg:text-[46px] lg:leading-[1.4]">
            {sectionHeadings.testimonialTitle}
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {visible.map((testimonial) => (
              <article
                key={testimonial.name}
                className="relative bg-white p-[35px_30px_30px] shadow-[0_5px_12px_-9px_rgba(0,0,0,0.17)]"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt=""
                      className="h-20 w-20 rounded-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute -bottom-2 -right-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-brand text-white">
                      <Quote className="h-4 w-4 fill-current" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold uppercase text-ink">{testimonial.name}</h3>
                    <span className="text-[13px] font-semibold uppercase text-brand">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-muted">{testimonial.quote}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label={scrollLeftLabel}
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === start ? 'true' : undefined}
                  onClick={() => goTo(index)}
                  className={`h-[3px] w-[30px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    index === start ? 'bg-brand' : 'bg-edge'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label={scrollRightLabel}
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-ink transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
