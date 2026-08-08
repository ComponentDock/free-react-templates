import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.',
    author: 'Garreth Smith',
    role: 'CEO, Founder of Commercial Building',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    author: 'Garreth Smith',
    role: 'CEO, Founder of Interior Design',
  },
  {
    quote:
      'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and".',
    author: 'Garreth Smith',
    role: 'Exterior Designer',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  return (
    <section aria-label="Testimonials" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white lg:text-4xl">
          Our satisfied customer says
        </h2>
        <p className="mt-4 leading-relaxed text-mist dark:text-white/60">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in.
        </p>

        <figure
          className="mt-12 rounded-lg bg-white p-10 shadow-sm dark:bg-gray-950"
          aria-live="polite"
        >
          <blockquote className="text-lg leading-relaxed text-ink dark:text-white/80">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-display text-lg font-bold text-ink dark:text-white">
              {current.author}
            </p>
            <p className="mt-1 text-sm text-brand">{current.role}</p>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="rounded-full bg-white p-3 text-ink shadow-sm transition-colors hover:bg-brand hover:text-white dark:bg-gray-950 dark:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="rounded-full bg-white p-3 text-ink shadow-sm transition-colors hover:bg-brand hover:text-white dark:bg-gray-950 dark:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
