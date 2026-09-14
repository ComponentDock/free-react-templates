import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Delivering innovative digital solutions that transform businesses. From strategy to execution, they helped us achieve remarkable growth.',
    author: 'Jean Smith',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    author: 'Carl Spencer',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts. They delivered beyond our expectations with creative excellence.',
    author: 'Ryan Peters',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const current = testimonials[index]!

  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-white">What Clients Are Saying</h2>

        <blockquote className="mb-8">
          <p className="text-lg leading-relaxed text-white/90">&ldquo;{current.quote}&rdquo;</p>
          <cite className="mt-4 block text-sm font-semibold text-white/80">
            &mdash; {current.author}
          </cite>
        </blockquote>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
