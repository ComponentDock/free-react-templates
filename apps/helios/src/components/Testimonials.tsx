import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Our electric bill dropped by 80% the first month after activation. The Helios team made the whole process effortless from quote to switch-on.',
    name: 'Marcus Webb',
    role: 'Homeowner in Austin',
  },
  {
    quote:
      'The installation crew was professional, punctual, and left the site spotless. Our warehouse now runs on clean energy and the numbers speak for themselves.',
    name: 'Dana Reyes',
    role: 'Business Owner',
  },
  {
    quote:
      'Switching to solar was the best financial decision we have made. With the tax credit and lease payments, we started saving money immediately.',
    name: 'Priya Natarajan',
    role: 'Homeowner in Dallas',
  },
  {
    quote:
      'From the first consultation to activation took under three weeks. The monitoring app makes it easy to see exactly what we save every day.',
    name: 'Tom Gallagher',
    role: 'Homeowner in Houston',
  },
  {
    quote:
      'They handled every permit, inspection, and utility form. I did not have to lift a finger — just signed the paperwork and watched the meter run backward.',
    name: 'Elena Rodriguez',
    role: 'Homeowner in San Antonio',
  },
  {
    quote:
      'Great communication throughout, and the battery backup has already paid for itself during a summer storm. Highly recommend Helios.',
    name: 'Jordan Blake',
    role: 'Homeowner in Austin',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length
  const active = testimonials[index]!

  const next = () => setIndex((current) => (current + 1) % count)
  const prev = () => setIndex((current) => (current - 1 + count) % count)

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              What Our Customers Say
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="relative mt-12">
            <figure
              aria-live="polite"
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex items-center justify-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-6 text-lg font-medium leading-relaxed text-gray-800 sm:text-xl dark:text-gray-200">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-bold text-gray-900 dark:text-white">{active.name}</p>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{active.role}</p>
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute -left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:text-primary-600 sm:-left-6 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-primary-400"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute -right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:text-primary-600 sm:-right-6 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-primary-400"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === index
                    ? 'w-6 bg-primary-600'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700',
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
