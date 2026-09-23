import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Exceptional legal representation. The team fought tirelessly for my case and delivered results beyond my expectations. Highly recommended.',
    name: 'Sarah Mitchell',
    role: 'Business Owner',
  },
  {
    quote:
      'Professional, responsive, and truly dedicated to their clients. They made a complex legal process feel straightforward and manageable.',
    name: 'James Carter',
    role: 'CEO, Tech Startup',
  },
  {
    quote:
      'Outstanding attorneys who genuinely care about their clients. Their expertise in corporate law saved our company from a major dispute.',
    name: 'Emily Rodriguez',
    role: 'Director of Operations',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
          <span className="text-primary-400">Happy</span> Clients
        </h2>

        <div className="relative max-w-3xl">
          <blockquote className="rounded-lg bg-gray-800/50 p-8">
            <Quote className="mb-4 h-8 w-8 text-primary-400" aria-hidden="true" />
            <p className="text-lg leading-relaxed text-gray-300">{t.quote}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-400/20 text-sm font-bold text-primary-400">
                {t.name.charAt(0)}
              </div>
              <div>
                <strong className="block text-white">{t.name}</strong>
                <span className="text-sm text-gray-400">{t.role}</span>
              </div>
            </div>
          </blockquote>

          <div className="mt-6 flex gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-primary-400 hover:text-primary-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-primary-400 hover:text-primary-400"
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
