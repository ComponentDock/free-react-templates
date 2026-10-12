import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TESTIMONIALS } from '../lib/site'

const ILLUSTRATION = 'https://picsum.photos/seed/gridhost-quote/900/700'

/**
 * The testimonial split: a two-slide carousel of founder rows (avatar, 30px pink
 * name, muted role) over a 20px quote, beside a full-width illustration. The
 * chrome is the measured pair of edge arrows — the previous in pale pink, the
 * next in the brand pink — and there are no dots.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  function step(delta: number) {
    setIndex((current) => (current + delta + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section id="testimonials" aria-label="Testimonials" className="relative pb-[70px] min-[768px]:pb-[120px] min-[992px]:pb-[100px] min-[1200px]:pb-[180px]">
      <div className="mx-auto flex w-full max-w-[1140px] flex-wrap items-center px-[15px]">
        <div className="relative w-full lg:w-7/12">
          {TESTIMONIALS.map((testimonial, slideIndex) => {
            const isActive = slideIndex === index

            return (
              <figure
                key={testimonial.name}
                data-testid={`testimonial-${slideIndex}`}
                aria-hidden={!isActive}
                className={cn(
                  'px-[15px] transition-opacity duration-500 min-[768px]:pl-[80px]',
                  isActive ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
                )}
              >
                <div className="mb-[30px] flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt=""
                    aria-hidden="true"
                    className="h-[90px] w-[90px] rounded-full object-cover"
                  />
                  <div className="ml-[20px]">
                    <span className="block font-heading text-[30px] font-semibold text-brand">
                      {testimonial.name}
                    </span>
                    <p className="font-medium text-muted">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="mb-[50px] text-[20px] leading-[1.5] text-navy-quote min-[1200px]:pr-[100px]">
                  {testimonial.quote}
                </blockquote>
              </figure>
            )
          })}

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => step(-1)}
            className="absolute top-1/2 left-0 z-[5] -translate-y-1/2 text-arrow-prev transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => step(1)}
            className="absolute top-1/2 right-0 z-[5] -translate-y-1/2 text-brand transition-colors hover:text-pricing focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="w-full lg:w-5/12 lg:pr-0 min-[992px]:relative min-[992px]:right-[-55px]">
          <img
            src={ILLUSTRATION}
            alt="Illustration of a support engineer at a desk"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
