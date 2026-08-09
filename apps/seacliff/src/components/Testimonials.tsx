import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Reveal } from './Reveal'

interface Testimonial {
  quote: string
  name: string
  initials: string
  occasion: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'An absolutely breathtaking experience. The service was impeccable, the views were stunning, and every detail was perfect. We will definitely be back.',
    name: 'Victoria Hartwell',
    initials: 'VH',
    occasion: 'Traveled with Family',
  },
  {
    quote:
      'We celebrated our anniversary at Seacliff and it exceeded every expectation. The sunset from the private beach was unforgettable.',
    name: 'James & Olivia Chen',
    initials: 'JC',
    occasion: 'Anniversary Celebration',
  },
  {
    quote:
      'Immaculate rooms, seamless Wi-Fi, and a team that anticipates your every need. My favorite place to stay on business trips.',
    name: 'Marcus Beaumont',
    initials: 'MB',
    occasion: 'Business Traveler',
  },
  {
    quote:
      'From the spa to the infinity pool, everything felt world-class. The breakfast at Sunrise Cafe alone is worth the trip.',
    name: 'Elena Rodriguez',
    initials: 'ER',
    occasion: 'Girls Getaway',
  },
  {
    quote:
      'The villas are stunning and the staff made our family wedding feel effortless. Every guest is still talking about it.',
    name: 'The Patels',
    initials: 'TP',
    occasion: 'Wedding Guests',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const visible = testimonials[index]!

  const previous = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((current) => (current + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Guest Reviews
          </p>
          <h2 className="mt-2 text-center font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            Hear from guests who have experienced the magic of Seacliff.
          </p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
          <figure className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-10">
            <div role="img" aria-label="5 out of 5 stars" className="flex justify-center gap-1">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-5 w-5 fill-accent-500 text-accent-500"
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-200">
              &ldquo;{visible.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex flex-col items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 font-display text-base font-bold text-white">
                {visible.initials}
              </span>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{visible.name}</div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {visible.occasion}
                </div>
              </div>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="rounded-full border border-gray-300 p-3 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-gray-300 p-3 text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
