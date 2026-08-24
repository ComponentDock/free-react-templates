import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS, TESTIMONIALS_BLURB, TESTIMONIALS_HEADING } from '../data'

/* .nonloop-block-13 — one testimonial slide at a time (white card: round
   avatar, light-weight name, italic quote) with centered dot indicators and
   prev/next arrows; navigation wraps at both ends. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  const previous = () => setIndex((current) => (current - 1 + count) % count)
  const next = () => setIndex((current) => (current + 1) % count)
  const goTo = (target: number) => setIndex(target)

  return (
    <section id="customers" aria-label="Customer testimonials" className="py-[7em]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-[0.2em] text-black lg:text-[2rem]">
            {TESTIMONIALS_HEADING}
          </h2>
          <div aria-hidden="true" className="mx-auto mt-4 h-[2px] w-[70px] bg-brand" />
          <p className="mt-4 leading-relaxed text-ink">{TESTIMONIALS_BLURB}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          {TESTIMONIALS.map((testimonial, i) => (
            <figure
              key={testimonial.name}
              className={cn('bg-white p-3 text-center md:p-5', i === index ? 'block' : 'hidden')}
            >
              <img
                src={`https://picsum.photos/seed/${testimonial.seed}/200/200`}
                alt=""
                loading="lazy"
                className="mx-auto h-40 w-40 rounded-full object-cover"
              />
              <h3 className="mt-4 font-heading text-[22px] font-light text-black">
                {testimonial.name}
              </h3>
              <blockquote className="mt-3 italic leading-relaxed text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </figure>
          ))}

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previous}
              className="cursor-pointer rounded-full border border-gray-300 p-2 text-black transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((testimonial, i) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-2 w-2 cursor-pointer rounded-full border border-gray-400 p-0',
                    i === index ? 'bg-brand' : 'bg-transparent',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="cursor-pointer rounded-full border border-gray-300 p-2 text-black transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
