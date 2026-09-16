import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Elevate completely transformed my approach to leadership. The coaching sessions were insightful and actionable.',
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    avatar: 'https://picsum.photos/seed/elevate-person-1/200/200',
  },
  {
    quote:
      'I was stuck in my career for years. After just 3 months of coaching, I landed my dream role.',
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    avatar: 'https://picsum.photos/seed/elevate-person-2/200/200',
  },
  {
    quote:
      'The business coaching program helped me double my revenue in one year. Highly recommended!',
    name: 'Emily Rodriguez',
    role: 'Founder, Bloom Studio',
    avatar: 'https://picsum.photos/seed/elevate-person-3/200/200',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((idx) => (idx + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((idx) => (idx - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]!

  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-ink dark:text-white">What Our Clients Say</h2>
        <div className="relative mt-12">
          <Quote className="mx-auto h-10 w-10 text-brand/30" aria-hidden="true" />
          <blockquote className="mt-6 text-lg leading-relaxed text-ink-light dark:text-gray-400">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
            <div className="text-left">
              <div className="font-semibold text-ink dark:text-white">{t.name}</div>
              <div className="text-sm text-ink-light dark:text-gray-400">{t.role}</div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink-light transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-400"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink-light transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-400"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
