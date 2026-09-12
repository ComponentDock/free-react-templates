import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Katie Johnson',
    text: 'Refuge made finding the right home insurance policy effortless. Their team walked me through every option and helped me save hundreds annually.',
    image: 'https://picsum.photos/seed/refuge-testi-1/100/100',
  },
  {
    name: 'Jun Mars',
    text: 'After a fender bender, Refuge handled my claim quickly and fairly. I could not have asked for a better experience during a stressful time.',
    image: 'https://picsum.photos/seed/refuge-testi-2/100/100',
  },
  {
    name: 'Shane Holmes',
    text: 'Our business insurance was overdue for a review. Refuge found us better coverage at a lower price. Highly recommend their commercial team.',
    image: 'https://picsum.photos/seed/refuge-testi-3/100/100',
  },
  {
    name: 'Mark Johnson',
    text: 'Professional, responsive, and genuinely helpful. Refuge has been our family insurance provider for three years now and we could not be happier.',
    image: 'https://picsum.photos/seed/refuge-testi-4/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-paper-alt py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            Testimonies
          </h2>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-4 h-8 w-8 text-brand/30" />
          <img
            src={t.image}
            alt={t.name}
            className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
          />
          <h3 className="mb-2 text-lg font-semibold text-ink">{t.name}</h3>
          <p className="mb-6 italic text-mist">&ldquo;{t.text}&rdquo;</p>
          <div className="flex justify-center gap-2">
            <button
              onClick={prev}
              className="rounded-full border border-gray-200 p-2 text-mist transition hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="rounded-full border border-gray-200 p-2 text-mist transition hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
