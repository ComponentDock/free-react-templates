import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    text: 'Coachly completely transformed my approach to life. The coaching sessions were incredibly insightful and helped me find clarity.',
  },
  {
    name: 'Michael Chen',
    text: 'I achieved more in 3 months with Coachly than I did in years of trying on my own. Highly recommended!',
  },
  {
    name: 'Emma Williams',
    text: 'The team at Coachly is professional, caring, and genuinely invested in your success. A life-changing experience.',
  },
]

export function getTestimonial(index: number) {
  return TESTIMONIALS[index] ?? TESTIMONIALS[0]!
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonial = getTestimonial(current)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Testimonials</h2>
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-4 h-10 w-10 text-[#3a4971]" />
          <p className="mb-6 text-lg italic text-gray-600">&ldquo;{testimonial.text}&rdquo;</p>
          <p className="mb-6 font-bold text-gray-900">&mdash; {testimonial.name}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-gray-300 p-2 text-gray-600 hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
