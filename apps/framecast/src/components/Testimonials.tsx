import { useState } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote:
      'Their team delivered an exceptional brand identity that perfectly captured our vision. The attention to detail and creative approach exceeded all expectations.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
  },
  {
    id: 2,
    quote:
      'Working with this team was a game-changer for our digital presence. They understood our audience and created designs that truly resonate.',
    name: 'Michael Chen',
    role: 'Marketing Director, InnovateCo',
  },
  {
    id: 3,
    quote:
      'The 3D visualizations they produced were absolutely stunning. They brought our architectural concepts to life in ways we never imagined possible.',
    name: 'Emily Rodriguez',
    role: 'Principal, Arch Studio',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-12 font-poppins text-3xl font-bold text-dark">Testimonials</h2>
        <Quote className="mx-auto mb-6 h-10 w-10 text-brand/30" />
        <blockquote className="mb-8 text-lg leading-relaxed text-muted">
          &ldquo;{testimonials[current]!.quote}&rdquo;
        </blockquote>
        <p className="font-poppins text-lg font-semibold text-dark">
          {testimonials[current]!.name}
        </p>
        <p className="text-sm text-muted">{testimonials[current]!.role}</p>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-brand/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
