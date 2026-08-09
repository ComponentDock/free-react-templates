import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mosan Cameron',
    role: 'Executive of FedEx',
    quote:
      'Best barbershop in town. From the hot towel to the final line-up, everything is done with care. I walk out feeling like a new man every single time.',
  },
  {
    name: 'Evelyn Hart',
    role: 'Regular Client',
    quote:
      'The wedding styling was flawless — sharp, comfortable, and exactly what the photos needed. Stylely made the big day even better.',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonial = testimonials[current]!

  const next = () => setCurrent((index) => (index + 1) % testimonials.length)
  const previous = () =>
    setCurrent((index) => (index - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      id="testimonials"
      className="bg-lavender py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
          What Clients Say
        </h2>
        <figure className="mt-12 rounded-2xl border border-gray-100 bg-white px-8 py-12 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
            <Quote className="h-6 w-6" aria-hidden="true" />
          </span>
          <blockquote className="mt-6 text-base leading-relaxed text-mist dark:text-gray-400">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-8">
            <span className="font-display text-lg font-semibold text-ink dark:text-white">
              {testimonial.name}
            </span>
            <span className="mt-1 block text-sm font-medium uppercase tracking-[0.2em] text-brand">
              {testimonial.role}
            </span>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
