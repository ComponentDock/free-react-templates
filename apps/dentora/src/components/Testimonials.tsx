import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'I used to dread going to the dentist, but Dr. Mitchell and her team completely changed that. The office is beautiful, and everyone is so kind and gentle. Best dental experience ever!',
    name: 'Jennifer Walsh',
    role: 'Patient for 5 years',
    initial: 'J',
  },
  {
    quote:
      'Dr. Park did my veneers and I cannot stop smiling. The results are absolutely stunning and look completely natural. The entire process was smooth and painless.',
    name: 'David Chen',
    role: 'Cosmetic patient',
    initial: 'D',
  },
  {
    quote:
      'My daughter was terrified of braces, but Dr. Santos made it such a positive experience. She actually looks forward to her appointments now. Truly an amazing orthodontist.',
    name: 'Rachel Thompson',
    role: 'Parent of orthodontic patient',
    initial: 'R',
  },
  {
    quote:
      'I was terrified of dentists until I came here. The team is so gentle and patient. Now I actually look forward to my checkups — something I never thought I would say.',
    name: 'Michael Brooks',
    role: 'Patient for 2 years',
    initial: 'M',
  },
  {
    quote:
      'My Invisalign treatment was completed in just 8 months. The results exceeded my expectations. Thank you to the whole Dentora team for a flawless experience.',
    name: 'Emily Rodriguez',
    role: 'Invisalign patient',
    initial: 'E',
  },
  {
    quote:
      'Both my kids love coming here. The pediatric team makes dental visits fun and stress-free for the whole family. We would never go anywhere else.',
    name: 'Lisa Nguyen',
    role: 'Parent of 2',
    initial: 'L',
  },
] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const previous = () =>
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((value) => (value + 1) % testimonials.length)

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Hear from real patients about their experience at Dentora.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <figure className="overflow-hidden rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-6 flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
              >
                {current.initial}
              </span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{current.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{current.role}</p>
              </div>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-100 hover:text-gray-900 sm:flex lg:-left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-100 hover:text-gray-900 sm:flex lg:-right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((testimonial, dotIndex) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
              aria-current={dotIndex === index ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all ${
                dotIndex === index
                  ? 'w-8 bg-primary-600 dark:bg-primary-400'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
