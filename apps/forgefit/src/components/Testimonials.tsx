import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    quote:
      'I lost 30 pounds in 6 months and gained confidence I never knew I had. The trainers at Forgefit genuinely care about your progress.',
    name: 'Rachel Kim',
    detail: 'Member for 2 years',
  },
  {
    quote:
      'The CrossFit program pushed me beyond what I thought was possible. I went from barely doing one pull-up to competing in local events.',
    name: 'James Torres',
    detail: 'Member for 1 year',
  },
  {
    quote:
      'As a busy professional, the flexible schedule and 24/7 access made all the difference. The app makes tracking my workouts effortless.',
    name: 'Priya Sharma',
    detail: 'Member for 3 years',
  },
  {
    quote:
      'The variety of classes keeps me motivated. I have tried everything from boxing to yoga and love them all.',
    name: 'Tanya Brooks',
    detail: 'Member for 1.5 years',
  },
  {
    quote:
      'As a competitive athlete, I need serious equipment and knowledgeable staff. Forgefit delivers on both fronts.',
    name: 'Derek Williams',
    detail: 'Member for 4 years',
  },
  {
    quote:
      'The 24/7 access is a game-changer for my schedule. Clean facility, great equipment, and the best trainers in the city.',
    name: 'Lisa Nakamura',
    detail: 'Member for 2 years',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const previous = () => setIndex((current) => (current - 1 + total) % total)
  const next = () => setIndex((current) => (current + 1) % total)

  const active = testimonials[index]!

  return (
    <section className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Success Stories
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Real Results, Real People
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Hear from members who transformed their lives at Forgefit.
        </p>

        <figure className="mt-12 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-12 dark:border-gray-800 dark:bg-gray-950">
          <Quote className="mx-auto h-10 w-10 text-primary-500" aria-hidden="true" />
          <blockquote className="mt-6 text-xl font-medium leading-relaxed text-gray-900 dark:text-white">
            "{active.quote}"
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-display text-lg font-bold text-gray-900 dark:text-white">
              {active.name}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{active.detail}</p>
          </figcaption>
        </figure>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={dotIndex === index}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  dotIndex === index
                    ? 'w-8 bg-primary-600'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
