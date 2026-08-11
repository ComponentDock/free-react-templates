import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS, TESTIMONY_POSITION, TESTIMONY_SCRIPT, TESTIMONY_TITLE } from '../data'
import { SectionHeading } from './SectionHeading'

/* .carousel-testimony — photo background with a full-cover WHITE overlay
   (opacity .8), 5 slides shown one at a time: 130px circular avatar with
   a small quote badge overlapping its bottom-right, lorem quote, name
   18px/500, position "Customer". Centered dots + prev/next, wrapping. */
export function Testimony() {
  const [active, setActive] = useState(0)
  const slideCount = TESTIMONIALS.length

  const goTo = (index: number) => setActive(((index % slideCount) + slideCount) % slideCount)

  return (
    <section
      aria-label="Customer testimonials"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/palate-testimonial/1920/800')" }}
    >
      {/* Full-cover white overlay at opacity .8. */}
      <div aria-hidden="true" className="absolute inset-0 bg-white/80" />

      <div className="relative z-[1] px-4 py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading script={TESTIMONY_SCRIPT} title={TESTIMONY_TITLE} />

          <div className="relative">
            {TESTIMONIALS.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                aria-hidden={index !== active}
                className={cn(
                  'px-2 text-center transition-opacity duration-300',
                  index === active ? 'block' : 'hidden',
                )}
              >
                <div className="relative mx-auto mb-4 w-[130px]">
                  <img
                    src={`https://picsum.photos/seed/${testimonial.seed}/200/200`}
                    alt={testimonial.name}
                    className="h-[130px] w-[130px] rounded-full object-cover"
                  />
                  <span className="absolute -right-1 -bottom-1 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                    <Quote aria-hidden="true" className="h-4 w-4 fill-current" />
                  </span>
                </div>
                <blockquote className="mx-auto max-w-[720px] text-[16px] leading-7 text-body">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <p className="text-[18px] font-medium text-ink">{testimonial.name}</p>
                  <span className="mt-1 block text-[14px] text-black/30">{TESTIMONY_POSITION}</span>
                </figcaption>
              </figure>
            ))}

            {/* Prev / next controls. */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(active - 1)}
              className="absolute top-1/2 -left-16 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-ink transition-colors hover:border-brand hover:text-brand lg:flex"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(active + 1)}
              className="absolute top-1/2 -right-16 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-ink transition-colors hover:border-brand hover:text-brand lg:flex"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indicators. */}
          <div className="mt-8 flex justify-center gap-2.5">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
                className={cn(
                  'h-[12px] w-[12px] cursor-pointer rounded-full border border-gray-400',
                  index === active ? 'bg-brand' : 'bg-transparent',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
