import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { TESTIMONIALS, TESTIMONIAL_BG } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const current = TESTIMONIALS[index]!

  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  return (
    <section
      aria-label="Client testimonials"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${TESTIMONIAL_BG})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />
      <div className="relative mx-auto max-w-[1200px] px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-normal text-white md:text-5xl">
            What Client Says
          </h2>
          <div className="mt-10">
            <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
            <blockquote className="mt-6 text-2xl font-light leading-relaxed text-white">
              {current.quote}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={current.image}
                alt=""
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <p className="text-xl text-white">{current.name}</p>
                <p className="mt-0.5 text-sm text-white/70">{current.role}</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-brand hover:border-brand"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-brand hover:border-brand"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
