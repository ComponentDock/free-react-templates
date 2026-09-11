import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Racky Henderson',
    role: 'Father',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'guideway-person-1',
  },
  {
    name: 'Henry Dee',
    role: 'Businesswoman',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'guideway-person-2',
  },
  {
    name: 'Mark Huff',
    role: 'Entrepreneur',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'guideway-person-3',
  },
  {
    name: 'Rodel Golez',
    role: 'Consultant',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'guideway-person-4',
  },
  {
    name: 'Ken Bosh',
    role: 'Director',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'guideway-person-5',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-navy lg:text-4xl">
            Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Separated they live in. A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-start gap-6 rounded-xl border border-border bg-white p-8 shadow-sm">
            <img
              src={`https://picsum.photos/seed/${t.seed}/80/80`}
              alt={t.name}
              className="h-16 w-16 shrink-0 rounded-full object-cover"
              loading="lazy"
            />
            <div>
              <Quote className="mb-2 h-6 w-6 text-brand" aria-hidden={true} />
              <p className="mb-4 italic leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
              <p className="font-heading font-semibold text-navy">{t.name}</p>
              <p className="text-sm text-mist">{t.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-colors ${
                    i === current ? 'w-8 bg-brand' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
