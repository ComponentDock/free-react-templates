import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SPONSORS, TESTIMONIALS } from '../data'

/* Sponsors recreated from the source's sponsor-client area: a heading, eight
   bordered sponsor logo tiles, and the testimonial carousel below (three
   translucent cards with a gradient quote icon, prev/next arrows and dots). */

export function Sponsors() {
  const [index, setIndex] = useState(0)
  const slideCount = TESTIMONIALS.length
  const testimonial = TESTIMONIALS[index]!

  const prev = () => setIndex((value) => (value - 1 + slideCount) % slideCount)
  const next = () => setIndex((value) => (value + 1) % slideCount)

  return (
    <section className="bg-navy py-[100px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">
            Partners &amp; Sponsors
          </p>
          <h4 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]">
            Official Sponsor
          </h4>
        </div>

        <div className="mt-14 flex flex-wrap">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor}
              className="flex h-[200px] basis-1/2 items-center justify-center border border-line p-4 md:h-[240px] md:basis-1/4"
            >
              <span className="text-lg font-semibold uppercase tracking-wider text-muted">
                {sponsor}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial carousel */}
        <div className="relative mt-[100px]">
          <div className="mx-auto max-w-3xl">
            <div key={testimonial.name} className="rounded-[10px] bg-white/10 p-10 md:p-[50px]">
              <Quote
                className="h-20 w-20 bg-brand-gradient bg-clip-text text-transparent"
                aria-hidden="true"
              />
              <p className="mt-4 text-lg leading-relaxed text-white/90">{testimonial.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/summit-client-${index + 1}/80/80`}
                  alt=""
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div>
                  <h6 className="text-lg font-medium text-white">{testimonial.name}</h6>
                  <p className="text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-muted text-white transition-colors hover:bg-white/50 hover:text-black"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border-2 border-muted text-white transition-colors hover:bg-white/50 hover:text-black"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-brand' : 'bg-white/40',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
