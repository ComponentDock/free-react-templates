import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      'Let’s start your journey with us, your dream will come true. Everyone at Wanderbug knew the route, the weather window and where to eat.',
    name: 'Mark Anthony',
    role: 'CEO of Wanderbug',
  },
  {
    quote:
      'Twelve days across Turkey and Spitzberg, zero logistics on my plate. The crew handled the transfers, the permits and the last-minute storm reroute.',
    name: 'Elena Marsh',
    role: 'Repeat traveller',
  },
]

/* Testimonial slider over a soft photographic band in the brand's navy. */
export function Testimonials() {
  const [slide, setSlide] = useState(0)

  return (
    <section
      id="testimonials"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/wanderbug-testimonial-bg/1440/800)',
      }}
      className="bg-cover bg-center bg-navy py-[90px] lg:py-[139px]"
    >
      <div className="mx-auto max-w-[800px] px-4 text-center">
        <h2 className="mb-[40px] text-[24px] font-bold text-white md:text-[31px] lg:text-[50px]">
          What customers say
        </h2>

        <ul>
          {TESTIMONIALS.map((testimonial, index) =>
            index === slide ? (
              <li key={testimonial.name}>
                <figure className="rounded-[5px] bg-white/95 px-[30px] py-[40px]">
                  <blockquote className="text-[16px] leading-[1.8] text-body lg:text-[18px]">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-[30px]">
                    <img
                      src={`https://picsum.photos/seed/wanderbug-founder-${index + 1}/160/160`}
                      alt={testimonial.name}
                      loading="lazy"
                      className="mx-auto h-[80px] w-[80px] rounded-full object-cover"
                    />
                    <span className="mt-4 block font-display text-[20px] font-bold text-navy">
                      {testimonial.name}
                    </span>
                    <span className="block text-[14px] text-body">{testimonial.role}</span>
                  </figcaption>
                </figure>
              </li>
            ) : null,
          )}
        </ul>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setSlide((current) => Math.max(current - 1, 0))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-brand hover:border-brand focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setSlide((current) => Math.min(current + 1, TESTIMONIALS.length - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-brand hover:border-brand focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
