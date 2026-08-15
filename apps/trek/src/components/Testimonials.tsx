import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  nextTestimonialLabel,
  previousTestimonialLabel,
  showTestimonialLabel,
  testimonials,
  testimonialsBackdrop,
  testimonialsLabel,
  testimonialsTitle,
} from '../data'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const goTo = (next: number) => setIndex((next + testimonials.length) % testimonials.length)

  return (
    <section aria-label={testimonialsTitle} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          backdrop={testimonialsBackdrop}
          label={testimonialsLabel}
          title={testimonialsTitle}
        />
        <div className="mx-auto max-w-3xl">
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.name}
              aria-hidden={i !== index ? 'true' : undefined}
              className={
                i === index
                  ? 'relative isolate block bg-sand p-8 text-xl leading-[1.7] text-body md:p-12'
                  : 'hidden'
              }
            >
              <span
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 -z-10 block h-full w-full bg-sand/10"
              />
              <div className="flex items-start gap-4">
                <img src={testimonial.image} alt="" className="w-20 shrink-0" />
                <blockquote>
                  {testimonial.quote}
                  <p className="mt-4 text-base font-semibold text-ink">— {testimonial.name}</p>
                </blockquote>
              </div>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label={previousTestimonialLabel}
            onClick={() => goTo(index - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-sand hover:bg-sand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`${showTestimonialLabel} ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => goTo(i)}
                className={
                  i === index
                    ? 'h-2.5 w-2.5 rounded-full bg-sand'
                    : 'h-2.5 w-2.5 rounded-full bg-ghost transition-colors hover:bg-sand'
                }
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={nextTestimonialLabel}
            onClick={() => goTo(index + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-sand hover:bg-sand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
