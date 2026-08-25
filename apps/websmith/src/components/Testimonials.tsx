import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Websmith transformed our online presence completely. Their attention to detail and creative solutions exceeded all our expectations.',
    author: 'Sarah Williams',
    role: 'CEO, TechCorp',
  },
  {
    quote:
      'Working with the Websmith team was an absolute pleasure. They delivered a website that perfectly captures our brand essence.',
    author: 'David Chen',
    role: 'Marketing Director, InnovateCo',
  },
  {
    quote:
      'The quality of work and professionalism from Websmith is outstanding. They are our go-to partner for all digital projects.',
    author: 'Emily Rodriguez',
    role: 'Founder, StyleStudio',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const testimonial = testimonials[current]!

  return (
    <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Testimonials
        </p>
        <h2 className="mb-16 text-[2.2rem] font-bold text-black">Our Client Sayings</h2>

        <blockquote className="mb-8 text-lg leading-relaxed text-muted-dark">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="mb-2 font-bold text-black">{testimonial.author}</p>
        <p className="mb-8 text-sm text-muted-dark">{testimonial.role}</p>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-black"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-black"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
