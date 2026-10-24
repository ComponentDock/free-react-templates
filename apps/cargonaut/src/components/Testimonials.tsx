import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

const testimonialImage = 'https://picsum.photos/seed/cargonaut-testimonial/1600/800'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]!

  const go = (step: number) => {
    setIndex((current) => (current + step + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={testimonialImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-navy/60" aria-hidden="true" />
      <div className="mx-auto max-w-3xl px-4 py-28">
        <div className="rounded-[10px] bg-white px-8 py-12 text-center sm:px-14">
          <blockquote>
            <p className="text-lg font-normal leading-8 text-navy sm:text-xl">{active.quote}</p>
          </blockquote>
          <img
            src={`https://picsum.photos/seed/cargonaut-client-${index}/96/96`}
            alt={active.name}
            className="mx-auto mt-6 h-16 w-16 rounded-full object-cover"
            loading="lazy"
          />
          <p className="mt-4 text-base font-medium text-navy">{active.name}</p>
          <p className="text-sm text-body">{active.role}</p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center border border-line text-navy hover:border-brand hover:text-brand"
              onClick={() => go(-1)}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center border border-line text-navy hover:border-brand hover:text-brand"
              onClick={() => go(1)}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
