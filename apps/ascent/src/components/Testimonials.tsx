import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, 8000)
    return () => window.clearInterval(timer)
  }, [])

  function prev() {
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  function next() {
    setIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative overflow-hidden bg-ink py-24"
    >
      <img
        src="https://picsum.photos/seed/ascent-testimonial/1600/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-4xl px-4 lg:px-8">
        <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
        <div className="mt-8 min-h-[180px]">
          {testimonials.map((item, i) => (
            <figure key={i} className={cn('text-center', i === index ? 'block' : 'hidden')}>
              <blockquote className="text-lg leading-relaxed text-white">{item.quote}</blockquote>
              <figcaption className="mt-8">
                <span className="block font-display text-base text-white">{item.author}</span>
                <span className="mt-1 block text-sm text-white/60">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full border border-white/30 p-3 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full border border-white/30 p-3 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
