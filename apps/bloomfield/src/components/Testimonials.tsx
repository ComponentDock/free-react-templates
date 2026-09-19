import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "I just wanted to say thank you for making such gorgeous arrangements for our birthday celebration. I couldn't get over how perfect they were for the party. You did a fantastic job, and I appreciate it very much.",
    name: 'Alejandro Houston',
    role: 'Businessman',
  },
  {
    text: "The floral arrangements exceeded all our expectations. Every petal was placed with care and the colors were absolutely stunning. We've been customers for over three years now.",
    name: 'Sarah Mitchell',
    role: 'Event Planner',
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]!

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Quote className="mx-auto mb-6 h-10 w-10 text-bloom-300" />
        <p className="mb-8 text-lg leading-relaxed text-gray-600 italic">"{t.text}"</p>
        <h4
          className="text-xl font-bold text-gray-900"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t.name}
        </h4>
        <span className="text-sm text-gray-400">{t.role}</span>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-colors hover:text-bloom-400"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-400 shadow-sm transition-colors hover:text-bloom-400"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
