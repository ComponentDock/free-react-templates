import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'An absolute gem! The butter chicken was the best I have ever tasted. The ambiance was perfect for a family dinner.',
    name: 'Sarah Johnson',
    role: 'Food Blogger',
  },
  {
    quote:
      'Authentic Indian flavors that transported me straight to Delhi. The staff was incredibly welcoming and the service impeccable.',
    name: 'Michael Chen',
    role: 'Restaurant Critic',
  },
  {
    quote:
      'We celebrated our anniversary here and it was magical. The lamb biryani is a must-try — rich, fragrant, and absolutely delicious.',
    name: 'Emily Rodriguez',
    role: 'Loyal Customer',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const t = testimonials[index]!

  return (
    <section id="testimonials" className="relative bg-surface py-16">
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/corkage-testimonials/1920/600)' }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-10 font-display text-3xl font-bold text-white">What Our Guests Say</h2>

        <Quote className="mx-auto mb-4 h-8 w-8 text-brand" aria-hidden="true" />

        <blockquote className="mb-6 text-lg italic leading-relaxed text-gray-200">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <p className="mb-1 font-semibold text-white">{t.name}</p>
        <p className="mb-8 text-sm text-gray-400">{t.role}</p>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-brand' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
