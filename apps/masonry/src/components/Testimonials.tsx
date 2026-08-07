import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    author: 'Falcon Astle',
    role: 'Google Android',
    quote:
      'If you are looking at blank cassettes on the web, you are probably looking for a team that delivers. Masonry turned our brief into a landmark.',
  },
  {
    author: 'Falcon Astle',
    role: 'Google Android',
    quote:
      'From the first sketch to the final walkthrough, the process was precise and transparent. Ut enim ad minim veniam — exactly what we hoped for.',
  },
  {
    author: 'Falcon Astle',
    role: 'Google Android',
    quote:
      'The interiors balance light and material beautifully. Consectetur adipisicing elit, sed do eiusmod tempor — we could not be happier.',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!
  const total = testimonials.length

  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  return (
    <section id="testimonials" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Client Love</p>
        <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
          Testimonials
        </h2>

        <figure className="mt-12 bg-white p-10 shadow-sm dark:bg-gray-900">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
            <Quote className="h-5 w-5" aria-hidden="true" />
          </span>
          <blockquote className="mt-6 text-base leading-relaxed text-mist dark:text-gray-400">
            {current.quote}
          </blockquote>
          <figcaption className="mt-6">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
              {current.author}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {current.role}
            </p>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <span aria-live="polite" className="text-sm font-semibold text-ink dark:text-white">
            <span aria-hidden="true" className={cn('text-brand')}>
              {index + 1}
            </span>{' '}
            / {total}
          </span>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
