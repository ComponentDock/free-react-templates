import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    heading: 'Exceptional Artistry',
    text: 'The team delivered a stunning piece that perfectly captured our vision. Their attention to detail and creative flair are truly remarkable.',
  },
  {
    heading: 'Creative Excellence',
    text: 'Working with this team has been an absolute pleasure. They brought our concepts to life with skill and precision beyond our expectations.',
  },
  {
    heading: 'Trusted Partners',
    text: 'From initial consultation to final delivery, the professionalism and quality of work exceeded every benchmark we set.',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  const next = () => setActive((current) => (current === testimonials.length - 1 ? 0 : current + 1))

  return (
    <section aria-label="Testimonials" className="relative overflow-hidden bg-ink py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {testimonials[active]!.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-400">
          {testimonials[active]!.text}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
