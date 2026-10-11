import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const go = (delta: number) =>
    setIndex((current) => (current + delta + TESTIMONIALS.length) % TESTIMONIALS.length)

  const testimonial = TESTIMONIALS[index]!

  return (
    <section id="testimonials" className="border-y border-black/10 bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <SectionHeading title="Testimonials" align="center" tone="primary" blurb={null} />
        <figure className="mt-12">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="mx-auto h-[100px] w-[100px] rounded-full object-cover"
          />
          <blockquote className="mt-6 text-[1.5rem] italic leading-relaxed">
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-4">
            <p className="text-base not-italic">{testimonial.author}</p>
            <p className="text-sm text-meta">{testimonial.role}</p>
          </figcaption>
        </figure>
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="text-primary hover:text-black"
          >
            <ChevronLeft aria-hidden="true" className="h-8 w-8" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="text-primary hover:text-black"
          >
            <ChevronRight aria-hidden="true" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
