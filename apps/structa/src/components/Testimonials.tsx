import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechBuild Inc.',
    avatar: 'https://picsum.photos/seed/avatar-sarah/100/100',
    text: 'Structa delivered our office complex ahead of schedule and within budget. Their attention to detail and professionalism made the entire process seamless.',
  },
  {
    name: 'Michael Chen',
    role: 'Director, Urban Developments',
    avatar: 'https://picsum.photos/seed/avatar-michael/100/100',
    text: 'We have worked with many construction companies, but Structa stands out for their commitment to quality and transparent communication throughout the project.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager, Green Spaces',
    avatar: 'https://picsum.photos/seed/avatar-emily/100/100',
    text: 'From the initial consultation to the final handover, the team at Structa exceeded our expectations. Highly recommend their services for any construction project.',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-white py-20" aria-label="Testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-heading md:text-4xl">Testimonials</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          What our clients say about working with us.
        </p>

        <div className="relative mt-12 mx-auto max-w-2xl">
          <div className="rounded-lg bg-gray-50 p-8 text-center shadow-sm">
            <Quote className="mx-auto h-8 w-8 text-brand/30" aria-hidden="true" />
            <p className="mt-4 text-lg italic text-mist">{t.text}</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
              <div className="text-left">
                <p className="font-semibold text-heading">{t.name}</p>
                <p className="text-sm text-mist">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full border border-gray-200 p-2 text-mist transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 rounded-full border border-gray-200 p-2 text-mist transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
