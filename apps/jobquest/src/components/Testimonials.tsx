import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Richard Anderson',
    image: 'https://picsum.photos/seed/testimonial1/120/120',
    quote:
      'JobQuest made my job search effortless. I found my dream position within weeks of signing up. The platform is intuitive and the job listings are always up to date.',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    image: 'https://picsum.photos/seed/testimonial2/120/120',
    quote:
      'As a hiring manager, I appreciate how easy it is to post jobs and find qualified candidates. The search filters save me hours every week.',
  },
  {
    id: 3,
    name: 'James Parker',
    image: 'https://picsum.photos/seed/testimonial3/120/120',
    quote:
      'The best career platform I have used. Clean interface, great job recommendations, and excellent support team. Highly recommended for anyone looking for their next role.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]!

  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="mx-auto mb-6 h-20 w-20 rounded-full object-cover"
          loading="lazy"
        />
        <blockquote className="mb-4 text-lg italic text-text-secondary">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <cite className="text-sm font-semibold text-text-muted not-italic">
          &mdash; {testimonial.name}
        </cite>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:bg-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:bg-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
