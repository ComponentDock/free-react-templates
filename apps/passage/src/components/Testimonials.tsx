import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Canada PR Holder',
    image: 'https://picsum.photos/seed/passage-sarah/100/100',
    text: 'Passage made my immigration journey to Canada seamless. Their consultants were knowledgeable and supportive throughout the entire process.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Australia Student Visa',
    image: 'https://picsum.photos/seed/passage-james/100/100',
    text: 'I got my student visa for Australia within weeks thanks to the Passage team. They handled all the documentation perfectly.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'UK Work Visa',
    image: 'https://picsum.photos/seed/passage-priya/100/100',
    text: 'Excellent service! The team guided me through every step of my UK work visa application. Highly recommended.',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-brand"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section id="reviews" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">What Our Clients Say</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-lg bg-mist p-8 text-center sm:p-12">
            <Quote className="mx-auto mb-6 h-10 w-10 text-brand/20" />

            <p className="mb-6 text-lg text-text italic">&ldquo;{t.text}&rdquo;</p>

            <StarRating count={t.rating} />

            <div className="mt-6 flex items-center justify-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <p className="font-bold text-heading">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </div>

            <button
              onClick={prev}
              aria-label="Previous testimonial"
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-brand hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                type="button"
                className={cn(
                  'h-3 w-3 rounded-full transition-colors',
                  i === current ? 'bg-brand' : 'bg-border',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
