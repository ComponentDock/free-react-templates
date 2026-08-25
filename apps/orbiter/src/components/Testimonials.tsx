import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechCorp',
    quote:
      'Working with this team has been transformative for our business. Their innovative approach delivered results beyond our expectations.',
    seed: 'orbiter-test-1',
  },
  {
    name: 'Michael Chen',
    position: 'Director, InnovateCo',
    quote:
      'Exceptional service and attention to detail. They truly understand what it takes to build a successful digital presence.',
    seed: 'orbiter-test-2',
  },
  {
    name: 'Emily Davis',
    position: 'Marketing Lead, BrandX',
    quote:
      'The strategic insights and creative execution have helped us reach new heights in our market positioning.',
    seed: 'orbiter-test-3',
  },
  {
    name: 'James Wilson',
    position: 'Founder, StartupHub',
    quote:
      'Professional, responsive, and results-driven. They are the ideal partner for any business looking to grow.',
    seed: 'orbiter-test-4',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const testimonial = TESTIMONIALS[current]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="mb-12 text-3xl font-bold text-heading">Happy Clients</h2>

        <div className="relative">
          {/* Quote icon */}
          <Quote size={40} className="mx-auto mb-6 text-brand-primary opacity-30" />

          {/* Testimonial content */}
          <div className="mb-8">
            <img
              src={`https://picsum.photos/seed/${testimonial.seed}/80/80`}
              alt={testimonial.name}
              className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
            />
            <blockquote className="mb-4 text-lg italic text-body">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <p className="font-bold text-heading">{testimonial.name}</p>
            <p className="text-sm text-footer-text">{testimonial.position}</p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-gray-300 p-2 text-body transition-colors hover:border-brand-primary hover:text-brand-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    i === current ? 'bg-brand-primary' : 'bg-gray-300',
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-gray-300 p-2 text-body transition-colors hover:border-brand-primary hover:text-brand-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
