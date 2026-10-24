import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'John Doe',
    role: 'CEO, Founder',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    name: 'Jane Smith',
    role: 'Marketing Director',
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    name: 'Bob Johnson',
    role: 'Product Manager',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const goPrev = () => setCurrent((c) => (c - 1 + total) % total)

  const goNext = () => setCurrent((c) => (c + 1) % total)

  const t = testimonials[current]!

  return (
    <section className="bg-dark-base px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Satisfied Clients</h2>

        <div className="mt-14">
          <Quote className="mx-auto h-10 w-10 text-accent/50" aria-hidden="true" />

          <p className="mt-6 text-lg leading-relaxed text-muted italic">&ldquo;{t.quote}&rdquo;</p>

          <div className="mt-8">
            <p className="font-semibold text-white">{t.name}</p>
            <p className="mt-1 text-sm text-muted">{t.role}</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-muted transition-colors hover:border-white hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-muted transition-colors hover:border-white hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
