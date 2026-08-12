import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials, testimonyQuote } from '../data'

export function SuccessStories() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const previous = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="bg-light py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src="https://picsum.photos/seed/kindred-testimony/640/640"
          alt="Kindred supporter"
          className="w-full rounded-sm object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-gray-900 dark:text-white">
            Success Stories
          </h2>
          <figure className="mt-8">
            <blockquote>
              <p className="text-lg italic leading-relaxed text-gray-600 dark:text-gray-300">
                “{testimonyQuote}”
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-display text-lg font-bold uppercase text-gray-900 dark:text-white">
                {current.name}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{current.role}</p>
            </figcaption>
          </figure>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={previous}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
