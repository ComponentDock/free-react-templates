import { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Phasellus vehicula tempus orci vel consequat. Nullam lorem sem, viverra a rutrum sed, gravida mattis magna. Suspendisse vitae commodo quam.',
    name: 'Jessica Brown',
    role: 'Patient',
    image: 'https://picsum.photos/seed/glint-review-1/100/100',
  },
  {
    quote:
      'Nullam lorem sem, viverra a rutrum sed, gravida mattis magna. Suspendisse vitae commodo quam. Quisque a enim et ante vulputate finibus.',
    name: 'Mark Wilson',
    role: 'Patient',
    image: 'https://picsum.photos/seed/glint-review-2/100/100',
  },
  {
    quote:
      'Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.',
    name: 'Sarah Davis',
    role: 'Patient',
    image: 'https://picsum.photos/seed/glint-review-3/100/100',
  },
] as const

function getTestimonial(index: number): (typeof testimonials)[number] {
  return testimonials[index]!
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const item = getTestimonial(current)

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-16 text-center text-3xl font-bold text-ink">Testimonials</h2>
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden shrink-0 rounded-full border border-gray-300 p-3 text-mist transition-colors hover:border-brand hover:text-brand sm:block"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex flex-1 flex-col items-center gap-8 md:flex-row">
            <div className="flex-1 rounded bg-white p-8 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mb-6 leading-relaxed text-mist">{item.quote}</p>
              <h6 className="font-semibold text-ink">{item.name}</h6>
              <span className="text-sm text-mist">{item.role}</span>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-40 shrink-0 rounded-full object-cover"
              loading="lazy"
            />
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="hidden shrink-0 rounded-full border border-gray-300 p-3 text-mist transition-colors hover:border-brand hover:text-brand sm:block"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
