import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'We went from idea to production in a single weekend. Blastoff removed an entire quarter of infrastructure work.',
    name: 'Alex Rivera',
    role: 'CTO',
    company: 'NexaFlow',
  },
  {
    quote:
      'The preview deployments for every branch changed how our team reviews features. It is our default workflow now.',
    name: 'Priya Sharma',
    role: 'Head of Engineering',
    company: 'DataPulse',
  },
  {
    quote:
      'Auto-scaling that just works. Black Friday traffic peaked at 40x normal and we did not touch a single setting.',
    name: 'Jordan Kim',
    role: 'Lead Developer',
    company: 'CloudSync',
  },
  {
    quote:
      'The developer API is a joy. We built our own internal tooling on top of it in an afternoon.',
    name: 'Chris Park',
    role: 'CEO',
    company: 'QuickShip',
  },
  {
    quote:
      'Security reviews that used to take weeks are now handled — SOC 2, SSO and audit logs out of the box.',
    name: 'Rebecca Stone',
    role: 'Founder',
    company: 'MedConnect',
  },
  {
    quote:
      'Our team ships daily instead of monthly. The analytics alone paid for the subscription ten times over.',
    name: 'Ahmed Hassan',
    role: 'CTO',
    company: 'GreenRoute',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]!

  const prev = () => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((value) => (value + 1) % testimonials.length)

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Trusted by fast-moving startups
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <Quote
            className="mx-auto h-10 w-10 text-primary-200 dark:text-primary-900"
            aria-hidden="true"
          />
          <figure className="mt-4 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
            <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-bold text-gray-900 dark:text-white">{active.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {active.role} · {active.company}
              </p>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div
              className="flex items-center gap-2"
              aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
            >
              {testimonials.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    dotIndex === index
                      ? 'bg-primary-600 dark:bg-primary-400'
                      : 'bg-gray-300 dark:bg-gray-700',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
