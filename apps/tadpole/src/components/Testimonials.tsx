import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Tadpole has been incredible for our daughter. She loves coming to school every day and has grown so much in confidence and creativity.',
    name: 'Jennifer Adams',
    role: 'Parent of Lily, age 4',
    image: 'https://picsum.photos/seed/tadpole-test1/160/160',
  },
  {
    quote:
      'The teachers are so nurturing and patient. Our son has learned so much through their play-based approach to learning.',
    name: 'Michael Brown',
    role: 'Parent of Oliver, age 3',
    image: 'https://picsum.photos/seed/tadpole-test2/160/160',
  },
  {
    quote:
      "We couldn't be happier with Tadpole. The curriculum is thoughtfully designed and the environment is so welcoming.",
    name: 'Sarah Davis',
    role: 'Parent of Emma, age 5',
    image: 'https://picsum.photos/seed/tadpole-test3/160/160',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const slide = testimonials[index]!

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-brand-light py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-center font-display text-lg font-semibold text-brand-pink">
          Testimonials
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-brand-dark sm:text-4xl">
          What Parents Say
        </h2>

        <div className="relative mt-12 rounded-2xl bg-brand-pink p-8 sm:p-12">
          <div className="text-center">
            <img
              src={slide.image}
              alt={`Portrait of ${slide.name}`}
              className="mx-auto h-20 w-20 rounded-full object-cover"
              loading="lazy"
            />
            <blockquote className="mt-6 text-lg text-white italic">
              &ldquo;{slide.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-lg font-bold text-white">{slide.name}</p>
            <p className="mt-1 text-sm text-white/70">{slide.role}</p>
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="absolute top-1/2 left-4 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="absolute top-1/2 right-4 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === index ? 'bg-brand-pink' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
