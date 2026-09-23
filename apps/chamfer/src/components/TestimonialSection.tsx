import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Chamfer transformed our office into a space that truly reflects our brand. Their attention to detail and creative vision exceeded all expectations.',
    name: 'David Chen',
    role: 'CEO, TechFlow Inc.',
  },
  {
    quote:
      'Working with the Chamfer team was an absolute pleasure. They understood our vision from day one and delivered a stunning living space.',
    name: 'Sarah Mitchell',
    role: 'Homeowner',
  },
] as const

export function TestimonialSection() {
  const [current, setCurrent] = useState(0)

  const handleNext = () => setCurrent((c) => (c + 1) % testimonials.length)
  const handlePrev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  const active = testimonials[current]!

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-brand-red" aria-hidden="true" />
        <blockquote className="mt-6 text-lg leading-relaxed text-muted-gray">
          &ldquo;{active.quote}&rdquo;
        </blockquote>
        <div className="mt-6">
          <p className="font-display text-base font-bold uppercase tracking-wider text-dark-text">
            {active.name}
          </p>
          <p className="mt-1 text-sm text-muted-gray">{active.role}</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-muted-gray transition-colors hover:border-brand-red hover:text-brand-red"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-3 w-3 rounded-full transition-colors',
                i === current ? 'bg-brand-red' : 'bg-gray-300',
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
          <button
            onClick={handleNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-muted-gray transition-colors hover:border-brand-red hover:text-brand-red"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
