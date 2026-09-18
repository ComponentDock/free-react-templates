import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Civicore made my job search incredibly easy. I found my dream position within a week of signing up!',
    name: 'Sarah Johnson',
    company: 'Tech Solutions Inc.',
    photo: 'https://picsum.photos/seed/civicore-test1/100/100',
  },
  {
    quote:
      'The platform is intuitive and the job listings are always up to date. Highly recommended for any job seeker.',
    name: 'Michael Chen',
    company: 'Digital Dynamics',
    photo: 'https://picsum.photos/seed/civicore-test2/100/100',
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Happy Employees</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Hear from professionals who found success through our platform.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              onMouseEnter={() => setActiveIndex(i)}
              className="group relative overflow-hidden rounded-[3px] bg-paper"
            >
              <img src={t.photo} alt={t.name} className="h-48 w-full object-cover" />
              <div className="relative p-6">
                <p className="text-sm leading-relaxed text-mist italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-display text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                activeIndex === i ? 'bg-brand' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
