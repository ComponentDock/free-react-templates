import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Capitex made the loan process incredibly simple. I got funded within 48 hours and the terms were very fair.',
    author: 'Sarah Johnson',
    role: 'Small Business Owner',
  },
  {
    quote:
      'The team was professional and responsive throughout. They understood my needs and offered the perfect loan product.',
    author: 'Michael Chen',
    role: 'Startup Founder',
  },
  {
    quote:
      'I was skeptical at first, but Capitex delivered on every promise. Fast, transparent, and customer-focused.',
    author: 'Emily Rodriguez',
    role: 'Freelance Designer',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const active = testimonials[current]!

  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/capitex-testi/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <Quote className="mx-auto mb-6 h-10 w-10 text-brand" />
        <p className="mb-6 text-xl italic leading-relaxed md:text-2xl">
          &ldquo;{active.quote}&rdquo;
        </p>
        <p className="mb-1 font-semibold">{active.author}</p>
        <p className="text-sm text-white/70">{active.role}</p>

        {/* Navigation dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="rounded-full p-2 text-white/70 hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                'h-3 w-3 rounded-full transition',
                i === current ? 'bg-brand' : 'bg-white/40 hover:bg-white/60',
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
          <button
            onClick={next}
            className="rounded-full p-2 text-white/70 hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
