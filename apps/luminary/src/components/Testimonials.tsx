import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Carl Anderson',
    text: 'Absolutely fantastic work! They understood our vision perfectly and delivered beyond our expectations.',
    seed: 'luminary-person-1',
  },
  {
    name: 'Sarah Mitchell',
    text: 'Professional, creative, and highly responsive. The team transformed our brand identity completely.',
    seed: 'luminary-person-2',
  },
  {
    name: 'James Porter',
    text: 'A truly inspiring team to work with. The results speak for themselves — our engagement doubled.',
    seed: 'luminary-person-3',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)

  function prev() {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }
  function next() {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }

  const t = testimonials[index]!

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-heading">Testimonials</h2>
        <div className="relative">
          <div className="flex flex-col items-center">
            <img
              src={`https://picsum.photos/seed/${t.seed}/150/150`}
              alt={t.name}
              className="mb-4 h-20 w-20 rounded-full object-cover"
              loading="lazy"
            />
            <p className="mb-4 max-w-xl text-base italic text-body-text">&ldquo;{t.text}&rdquo;</p>
            <p className="text-sm font-bold text-heading">{t.name}</p>
          </div>
          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-light-bg p-2 text-heading transition-colors hover:bg-brand/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-light-bg p-2 text-heading transition-colors hover:bg-brand/10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
