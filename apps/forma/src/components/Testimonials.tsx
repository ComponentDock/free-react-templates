import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Forma transformed our penthouse into something we never imagined possible. Every room feels intentional, warm, and unmistakably ours.',
    name: 'Isabella Fontaine',
    role: 'Homeowner, Coral Gables',
  },
  {
    quote:
      'Their team managed a full office renovation while we kept operating. The new space has completely changed how our teams collaborate.',
    name: 'Daniel Okafor',
    role: 'COO, SoFi Office Complex',
  },
  {
    quote:
      'From concept to installation, the process was seamless. Guests consistently comment on the atmosphere of our lobby and suites.',
    name: 'Elena Marchetti',
    role: 'General Manager, The Setai',
  },
] as const

export function Testimonials() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]!

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Homeowners and business leaders on what it is like to work with our studio.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <figure className="relative rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <Quote
              className="mx-auto h-8 w-8 text-primary-500 dark:text-primary-400"
              aria-hidden="true"
            />
            <blockquote className="mt-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-8">
              <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActive((current) => (current === 0 ? testimonials.length - 1 : current - 1))
              }
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {active + 1} / {testimonials.length}
            </span>
            <button
              type="button"
              onClick={() => setActive((current) => (current + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white dark:hover:text-gray-900"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
