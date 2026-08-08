import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Parapet delivered our dream home on time and under budget. Their attention to detail and communication throughout the project was outstanding.',
    name: 'Robert & Maria Garcia',
    role: 'Homeowners, The Woodlands',
    initial: 'R',
  },
  {
    quote:
      'We chose Parapet for our office complex and it was the best decision. They handled everything from permits to final inspection with complete professionalism.',
    name: 'David Chen',
    role: 'CEO, TechPark Developments',
    initial: 'D',
  },
  {
    quote:
      'The renovation of our historic building was a complex project. Parapet preserved every detail while bringing it into the modern era. Truly exceptional craftsmanship.',
    name: 'Sarah Thompson',
    role: 'Property Owner, Houston',
    initial: 'S',
  },
  {
    quote:
      'From the first consultation to the final walkthrough, the team kept us informed at every step. Our commercial build was completed three weeks ahead of schedule.',
    name: 'Marcus Johnson',
    role: 'Operations Director, Austin',
    initial: 'M',
  },
  {
    quote:
      'They built our family home with incredible precision. The quality of the finishes exceeded our expectations, and the project stayed within our budget.',
    name: 'Emily Rodriguez',
    role: 'Homeowner, San Antonio',
    initial: 'E',
  },
  {
    quote:
      'Their green building expertise helped us achieve LEED certification for our new facility. A knowledgeable, reliable partner from start to finish.',
    name: 'James Carter',
    role: 'Facilities Manager, Dallas',
    initial: 'J',
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
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Hear from homeowners and business owners who trusted us to bring their vision to life.
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
