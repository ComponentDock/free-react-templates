import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const quotes = [
  { name: 'Alan Crew', role: 'Partner at XYZ Co.' },
  { name: 'Jean Doe', role: 'Partner at XYZ Co.' },
  { name: 'Jessica Smith', role: 'Founder at Smith & Sons' },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const quote = quotes[index]!

  const previous = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length)
  const next = () => setIndex((i) => (i + 1) % quotes.length)

  return (
    <section className="bg-paper py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Testimonials</p>
        <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
          Why we are the best
        </h2>

        <figure className="mt-12 rounded-[5px] border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-gray-900 sm:p-12">
          <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
          <blockquote className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            “Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
            the coast of the Semantics, a large language ocean.”
          </blockquote>
          <figcaption className="mt-6">
            <h3 className="font-display text-base font-bold uppercase text-ink dark:text-white">
              {quote.name}
            </h3>
            <p className="mt-1 text-sm text-mist dark:text-gray-400">{quote.role}</p>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white dark:hover:border-brand dark:hover:text-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="text-sm font-semibold text-mist dark:text-gray-400">
            {index + 1} / {quotes.length}
          </span>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white dark:hover:border-brand dark:hover:text-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
