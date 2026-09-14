import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Saw shall light. Us their to place had creepeth day night great where appear to. Hath, called, sea called, gathering wherein open make living.',
    author: 'Mitchel Jefferson',
    role: 'CEO of Softking',
  },
  {
    quote:
      "Bearing saw she'd all let she'd lights abundantly blessed. Waters and two bearing. Living female itself gathering man multiply.",
    author: 'Sarah Mitchell',
    role: 'Creative Director',
  },
  {
    quote:
      "Together them divide so she'd bearing sixth. Dominion under very seasons together them divide so. Light us their to place had creepeth.",
    author: 'David Chen',
    role: 'Photographer',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]!

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:flex-row sm:px-6">
        {/* Left image */}
        <div className="w-full sm:w-5/12">
          <img
            src="https://picsum.photos/seed/shotglow-testi/600/700"
            alt="Testimonial portrait"
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right content */}
        <div className="w-full sm:w-7/12">
          <p className="mb-2 font-heading text-sm font-medium uppercase tracking-widest text-slate-900">
            Testimonials
          </p>
          <h2 className="mb-6 font-heading text-3xl font-semibold leading-snug text-slate-900 sm:text-4xl">
            With Efficiency to Unlock More Opportunities
          </h2>
          <p className="mb-8 leading-relaxed text-gray-400">{t.quote}</p>
          <p className="mb-8 font-heading text-lg font-semibold text-slate-900">
            {t.author}, <span className="font-normal text-gray-400">{t.role}</span>
          </p>

          <div className="flex gap-3">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center border border-slate-900 text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-slate-900 text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
