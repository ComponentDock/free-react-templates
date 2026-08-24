import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Pulse transformed our online presence completely. Their team delivered a stunning website that exceeded all our expectations. The results speak for themselves — our conversions doubled within three months.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://picsum.photos/seed/pulse-test1/100/100',
  },
  {
    text: 'Working with Pulse was an absolute pleasure. They took the time to understand our brand and delivered a marketing strategy that drove real results. Highly recommend their services to any business looking to grow.',
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    image: 'https://picsum.photos/seed/pulse-test2/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-navy-700 sm:text-4xl">Happy Customers</h2>
        <div className="relative mt-10">
          <Quote className="mx-auto mb-4 h-10 w-10 text-pulse-300" aria-hidden="true" />
          <blockquote className="text-lg text-gray-600 italic">&ldquo;{t.text}&rdquo;</blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <img
              src={t.image}
              alt={t.name}
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="font-semibold text-navy-700">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-pulse-400 hover:text-pulse-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-pulse-400 hover:text-pulse-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
