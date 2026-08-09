import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Elizabeth Anderson',
    role: 'Customer',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Nathan Harris',
    role: 'Customer',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Sophia Miller',
    role: 'Customer',
  },
] as const

export function Testimony() {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]!

  const goTo = (next: number) => {
    setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length)
  }

  return (
    <section aria-label="What Customers Saying" className="bg-brand py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
          Testimonials
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">What Customers Saying</h2>

        <div aria-live="polite" className="mt-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
            <Star className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <blockquote className="mt-6 text-lg leading-relaxed text-white/95">
            “{testimonial.quote}”
          </blockquote>
          <p className="mt-6 font-display text-lg text-white">{testimonial.name}</p>
          <p className="text-sm uppercase tracking-wide text-white/75">{testimonial.role}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
