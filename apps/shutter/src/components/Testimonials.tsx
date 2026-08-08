import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Elena captured our wedding in Tuscany beyond anything we could have imagined. Every image feels like a work of art.',
    name: 'Sarah & James Mitchell',
    role: 'Wedding, Tuscany',
    initials: 'SM',
  },
  {
    quote:
      'The most natural, timeless portraits we have ever had taken. Our entire team loves them.',
    name: 'Olivia Chen',
    role: 'Creative Director, Lumiere Beauty',
    initials: 'OC',
  },
  {
    quote:
      'Professional, patient, and incredibly talented. The session felt effortless and the photos are stunning.',
    name: 'Marcus Rivera',
    role: 'Portrait Session, New York',
    initials: 'MR',
  },
  {
    quote:
      'She has an incredible eye for light and emotion. Our family photos are beautiful and honest.',
    name: 'The Hendersons',
    role: 'Family Portrait Session',
    initials: 'TH',
  },
  {
    quote:
      'Our product campaign photos doubled engagement. Working with her was seamless from start to finish.',
    name: 'Natalie Cruz',
    role: 'E-commerce Brand Owner',
    initials: 'NC',
  },
  {
    quote:
      'From the first call to the final gallery, everything felt personal and thoughtful. Highly recommended.',
    name: 'Mark & Julie',
    role: 'Engagement Session',
    initials: 'MJ',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState<Testimonial>(testimonials[0]!)

  const next = () =>
    setCurrent((item) => testimonials[(testimonials.indexOf(item) + 1) % testimonials.length]!)
  const prev = () =>
    setCurrent(
      (item) =>
        testimonials[(testimonials.indexOf(item) - 1 + testimonials.length) % testimonials.length]!,
    )

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Kind Words
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            What my clients say about their experience working together.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-900">
          <Quote className="mx-auto h-8 w-8 text-accent-400" aria-hidden="true" />
          <blockquote className="mt-6 font-serif text-lg leading-relaxed text-gray-800 italic sm:text-xl dark:text-gray-200">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-200 font-serif text-lg font-semibold text-primary-800 dark:bg-primary-800 dark:text-primary-200">
              {current.initials}
            </span>
            <span className="text-left">
              <span className="block font-semibold text-gray-900 dark:text-white">
                {current.name}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">{current.role}</span>
            </span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-accent-500 hover:bg-accent-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setCurrent(item)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={item === current ? 'true' : undefined}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  item === current
                    ? 'w-6 bg-accent-500'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-accent-500 hover:bg-accent-500 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
