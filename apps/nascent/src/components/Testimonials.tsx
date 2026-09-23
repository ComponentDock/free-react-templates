import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Nascent completely transformed how we build products. The platform is intuitive, fast, and our team adopted it within a day.',
    name: 'Sarah Mitchell',
    role: 'Founder, NovaTech',
  },
  {
    quote:
      'We tried dozens of tools before finding Nascent. Nothing else comes close in terms of developer experience and reliability.',
    name: 'David Chen',
    role: 'CTO, ScaleUp Labs',
  },
  {
    quote:
      'The analytics alone saved us thousands. We finally have visibility into what matters and can make decisions with confidence.',
    name: 'Emily Park',
    role: 'VP of Growth, Acme Inc',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section data-testid="testimonials" className="bg-plum py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-orange-300">
          What people say
        </p>

        <blockquote className="mb-6">
          <p className="text-xl leading-relaxed text-white md:text-2xl">
            &ldquo;{current.quote}&rdquo;
          </p>
        </blockquote>

        <div>
          <p className="font-bold font-heading text-white">{current.name}</p>
          <p className="text-sm text-orange-300">{current.role}</p>
        </div>

        {/* Dot pagination */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition ${
                i === active ? 'bg-orange-400' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
