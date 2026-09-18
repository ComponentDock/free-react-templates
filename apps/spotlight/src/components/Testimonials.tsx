import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    image: 'https://picsum.photos/seed/spotlight-person-1/100/100',
    text: 'Spotlight made it incredibly easy to find the best restaurants in my area. The reviews are genuine and the interface is beautiful.',
  },
  {
    name: 'Christine Aguilar',
    image: 'https://picsum.photos/seed/spotlight-person-2/100/100',
    text: 'As a small business owner, listing on Spotlight brought me dozens of new customers. The verification process gives people confidence.',
  },
  {
    name: 'Robert Spears',
    image: 'https://picsum.photos/seed/spotlight-person-3/100/100',
    text: 'I use Spotlight every time I travel to a new city. The category filters and location search are exactly what I need.',
  },
  {
    name: 'Laura Bennett',
    image: 'https://picsum.photos/seed/spotlight-person-4/100/100',
    text: 'The best directory platform I have used. Clean design, accurate listings, and the search functionality is top-notch.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const t = testimonials[current]!

  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary">Testimonials</h2>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <img
            src={t.image}
            alt={t.name}
            className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
            loading="lazy"
          />
          <p className="mb-4 font-semibold text-heading">{t.name}</p>
          <Quote className="mx-auto mb-4 h-8 w-8 text-primary/30" />
          <blockquote className="mb-6 text-lg italic text-body">&ldquo;{t.text}&rdquo;</blockquote>
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-border p-2 text-body transition-colors hover:border-primary hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-body">
              {current + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-border p-2 text-body transition-colors hover:border-primary hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
