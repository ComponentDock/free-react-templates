import { useState } from 'react'

const testimonials = [
  {
    name: 'Carl Smith',
    company: 'Customer Corp.',
    quote:
      'Impulse delivered an outstanding brand identity that transformed our market presence. Their creative vision and attention to detail exceeded every expectation.',
    avatar: 'impulse-person-1',
  },
  {
    name: 'Craig Darren',
    company: 'Innovate Labs',
    quote:
      'Working with the Impulse team was a game-changer. They brought fresh perspectives and innovative solutions that drove real results for our business.',
    avatar: 'impulse-person-2',
  },
  {
    name: 'Sarah Mitchell',
    company: 'Horizon Media',
    quote:
      'The quality of their work speaks for itself. Impulse created a website that perfectly captures our brand essence while delivering an exceptional user experience.',
    avatar: 'impulse-person-3',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section className="bg-light-bg py-28">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center font-display text-3xl text-heading">Happy Client</h2>
        <div className="text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 flex items-center justify-center gap-4">
              <img
                src={`https://picsum.photos/seed/${current.avatar}/60/60`}
                alt={current.name}
                className="h-[60px] w-[60px] rounded-full object-cover"
              />
              <div className="text-left">
                <h3 className="text-base font-light text-heading">{current.name}</h3>
                <span className="text-sm text-gray-400">{current.company}</span>
              </div>
            </div>
            <blockquote className="text-base leading-relaxed text-body-text">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>
        </div>
        {/* Dot navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'w-4 bg-brand' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
