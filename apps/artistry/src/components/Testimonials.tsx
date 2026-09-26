import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialCard } from './TestimonialCard'

interface Testimonial {
  quote: string
  avatar: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Artistry brought our vision to life with incredible attention to detail. The design exceeded all expectations.',
    avatar: 'https://picsum.photos/seed/artistry-testimonial-1/80/80',
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
  },
  {
    quote:
      'Working with Artistry was a game-changer. The creative direction transformed our brand identity completely.',
    avatar: 'https://picsum.photos/seed/artistry-testimonial-2/80/80',
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
  },
  {
    quote:
      'The level of creativity and professionalism is unmatched. Artistry delivers designs that truly stand out.',
    avatar: 'https://picsum.photos/seed/artistry-testimonial-3/80/80',
    name: 'Emily Davis',
    role: 'Marketing Director, BrandCo',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section id="testimonials" className="bg-dark-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          What Clients say
        </h2>

        <div className="relative">
          <TestimonialCard {...testimonials[current]!} />

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
