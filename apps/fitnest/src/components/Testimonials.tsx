import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Testimonial {
  quote: string
  name: string
  photo: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Fitnest transformed my life. The instructors are incredibly supportive and the 200-hour program gave me the confidence to teach yoga professionally.',
    name: 'Alice Williams',
    photo: 'https://picsum.photos/seed/testimonial1/200/200',
  },
  {
    quote:
      'I came to Fitnest as a complete beginner and left feeling stronger and more centered than ever. The community here is truly special.',
    name: 'Robert Garcia',
    photo: 'https://picsum.photos/seed/testimonial2/200/200',
  },
  {
    quote:
      'The pranayama and meditation sessions are exceptional. I have practiced yoga for years but Fitnest brought my understanding to a whole new level.',
    name: 'Maria Lopez',
    photo: 'https://picsum.photos/seed/testimonial3/200/200',
  },
]

interface TestimonialsProps {
  className?: string
}

export function Testimonials({ className }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  }

  function next() {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
  }

  const t = testimonials[current]!

  return (
    <section id="testimonials" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-brand">
          Testimonials
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-heading">What Our Students Say</h2>
        <div className="relative mt-10 text-center">
          <blockquote className="text-lg leading-relaxed text-text italic">"{t.quote}"</blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <img
              src={t.photo}
              alt={t.name}
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <p className="font-semibold text-heading">{t.name}</p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full bg-light-bg p-2 text-text transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={cn('h-2 w-2 rounded-full', i === current ? 'bg-brand' : 'bg-gray-300')}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full bg-light-bg p-2 text-text transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
