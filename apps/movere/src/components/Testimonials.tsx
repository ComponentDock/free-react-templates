import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const testimonials = [
  {
    quote:
      'Movere moved our three-bedroom house in a single day. The crew was on time, careful with our furniture, and nothing was so much as scratched. Worth every penny.',
    name: 'Jennifer Martinez',
    move: 'Local Move',
  },
  {
    quote:
      'We relocated from Chicago to Los Angeles and Movere handled everything — packing, transport, unpacking. Our delivery arrived exactly in the promised window.',
    name: 'Robert Chen',
    move: 'Long Distance',
  },
  {
    quote:
      'They moved our entire office over a weekend. By Monday morning every desk was in place and our team barely noticed the transition. Incredibly professional.',
    name: 'Amanda Foster',
    move: 'Office Move',
  },
  {
    quote:
      'Moving with two kids and a dog is chaos, but Movere made it feel easy. The crew even reassembled the kids beds and crib before we arrived at the new house.',
    name: 'Brian & Kelly Adams',
    move: 'Family Home',
  },
  {
    quote:
      'As a first-time renter I was nervous, but the quote was exactly what I paid. They took extra care with my piano and antiques. Highly recommended.',
    name: 'Patricia Nguyen',
    move: 'Apartment Move',
  },
  {
    quote:
      'From the first call to the final walkthrough, everything was transparent and on schedule. Movere is the only moving company I will ever use again.',
    name: 'David Hoffman',
    move: 'Cross-Country',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]!

  const next = () => setIndex((current) => (current + 1) % testimonials.length)
  const prev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Thousands of Families
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950 sm:p-10">
            <Quote className="h-8 w-8 text-primary-500 dark:text-primary-400" aria-hidden="true" />
            <blockquote
              aria-live="polite"
              className="mt-4 text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-200"
            >
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                {active.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{active.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{active.move}</p>
              </div>
            </figcaption>
          </div>
        </Reveal>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === index
                    ? 'w-6 bg-primary-600 dark:bg-primary-400'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
