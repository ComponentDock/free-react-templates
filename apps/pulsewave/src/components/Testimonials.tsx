import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    author: 'John Doe',
    role: 'CEO, TechCorp',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control over the blind texts it is an almost unorthographic life.',
    author: 'Jane Smith',
    role: 'Marketing Director, BizCo',
  },
  {
    quote: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas.',
    author: 'Mike Johnson',
    role: 'CTO, StartupXYZ',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="bg-icon-bg py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-[88px]">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark">Happy Customers</h2>
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="mb-6 text-lg italic text-text-muted">
            &ldquo;{TESTIMONIALS[current]!.quote}&rdquo;
          </blockquote>
          <p className="font-semibold text-text-dark">{TESTIMONIALS[current]!.author}</p>
          <p className="text-sm text-text-muted">{TESTIMONIALS[current]!.role}</p>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
