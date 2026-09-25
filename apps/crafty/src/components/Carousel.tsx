import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    heading: 'From the root of experience We dig out the best talent',
    text: 'Their crafting workshops transformed my understanding of art. The attention to detail and quality of instruction is unmatched.',
  },
  {
    heading: 'Creative excellence in every project',
    text: 'Working with this team was a revelation. They brought our vision to life with precision and artistry that exceeded all expectations.',
  },
  {
    heading: 'Where tradition meets innovation',
    text: 'The perfect blend of traditional techniques and modern design. Every piece tells a story of dedication and creative passion.',
  },
] as const

export function Carousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((i) => (i + 1) % testimonials.length)
  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length)
  const item = testimonials[current]!

  return (
    <section className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 bg-primary-900/40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            {item.heading}
          </h3>
          <p className="mt-6 text-gray-300">{item.text}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
