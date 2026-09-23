import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'Working with this agency transformed our online presence completely. The attention to detail and creativity exceeded all expectations.',
    name: 'Sarah Johnson',
    role: 'CEO, TechVibe',
    avatar: 'https://picsum.photos/seed/atelier-person-1/80/80',
  },
  {
    quote:
      'Professional, responsive, and incredibly talented. They delivered a product that truly represents our brand identity.',
    name: 'Michael Chen',
    role: 'Founder, StartupLab',
    avatar: 'https://picsum.photos/seed/atelier-person-2/80/80',
  },
  {
    quote:
      'The team brought our vision to life in ways we never imagined. Highly recommend their creative services to anyone.',
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandCo',
    avatar: 'https://picsum.photos/seed/atelier-person-3/80/80',
  },
]

export function Testimonial() {
  const [index, setIndex] = useState(0)

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
          Testimonial
        </p>
        <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">What Our Clients Say</h2>

        <div className="mt-10">
          <img
            src={testimonials[index]!.avatar}
            alt={testimonials[index]!.name}
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
          <blockquote className="mt-4 text-base italic text-navy/60">
            &ldquo;{testimonials[index]?.quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-bold text-navy">{testimonials[index]?.name}</p>
          <p className="text-xs text-navy/40">{testimonials[index]?.role}</p>
        </div>

        {/* Dots */}
        <div
          className="mt-8 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Testimonials"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 rounded-full transition-all',
                i === index ? 'w-6 bg-brand-500' : 'w-2.5 bg-navy/20',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
