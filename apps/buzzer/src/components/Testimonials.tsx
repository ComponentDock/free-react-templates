import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Working with this team transformed our business. Their strategic approach and attention to detail is unmatched in the industry.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
  },
  {
    quote:
      'The results exceeded every expectation. Revenue grew 200% in the first year of partnership. Highly recommend their services.',
    name: 'Michael Chen',
    role: 'Founder, GrowthLab',
  },
  {
    quote:
      'Professional, innovative, and always delivers on time. They became an extension of our team and truly understand our vision.',
    name: 'Emily Rodriguez',
    role: 'Director, ScaleUp Co.',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active] as (typeof testimonials)[number]

  return (
    <section
      id="testimonials"
      className="relative py-20 dark:bg-gray-900"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/buzzer-testimonial-bg/1920/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-ink/85 dark:bg-ink-dark/90" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <blockquote>
          <p className="text-xl leading-relaxed text-white italic lg:text-2xl">
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="mt-8">
            <p className="text-lg font-bold text-white">{current.name}</p>
            <p className="mt-1 text-sm text-lavender">{current.role}</p>
          </div>
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === active ? 'bg-brand' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
