import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Reveal } from './Reveal'

const testimonials = [
  {
    quote:
      'The Indulgence package was pure bliss. I floated out of the spa — the massage and facial were absolute perfection.',
    name: 'Victoria Ellis',
    role: 'Regular Client',
  },
  {
    quote:
      'We booked the Anniversary Package and it exceeded every expectation. Thoughtful, serene, and utterly relaxing.',
    name: 'Jonathan P.',
    role: 'Anniversary Package',
  },
  {
    quote:
      'Camille and I come every month for facials. The team makes you feel like family from the moment you arrive.',
    name: 'Michael & Sarah',
    role: 'Anniversary Package',
  },
  {
    quote:
      'The Ultimate Retreat day was the reset I desperately needed. Worth every penny — I already booked my next visit.',
    name: 'Rachel Kim',
    role: 'Ultimate Retreat',
  },
  {
    quote:
      'Best deep-tissue massage in the city. Marcus is a miracle worker with my back — I am never going anywhere else.',
    name: 'Daniel Foster',
    role: 'Regular Client',
  },
  {
    quote:
      'Gorgeous space, immaculate treatments, and the friendliest staff. Sooth is my happy place, no question.',
    name: 'Amelia Hart',
    role: 'Gift Card Recipient',
  },
] as const

function StarRow() {
  return (
    <div role="img" aria-label="5 out of 5 stars" className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="h-5 w-5 fill-accent-400 text-accent-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const prev = () => setIndex((current) => (current - 1 + count) % count)
  const next = () => setIndex((current) => (current + 1) % count)

  const visible = testimonials[index]!

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Clients Say
          </h2>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-14 max-w-3xl">
          <div className="relative rounded-2xl bg-white p-10 text-center shadow-soft dark:bg-gray-950">
            <div className="flex items-center justify-center">
              <StarRow />
            </div>
            <blockquote className="font-heading mt-6 text-xl leading-relaxed text-gray-700 italic dark:text-gray-200">
              &ldquo;{visible.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6">
              <div className="font-semibold text-gray-900 dark:text-white">{visible.name}</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{visible.role}</div>
            </figcaption>

            <div className="absolute inset-y-0 -left-4 flex items-center lg:-left-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-soft transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-900 dark:text-gray-300"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="absolute inset-y-0 -right-4 flex items-center lg:-right-6">
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-soft transition-colors hover:bg-primary-600 hover:text-white dark:bg-gray-900 dark:text-gray-300"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={`h-2.5 rounded-full transition-all ${
                  dotIndex === index
                    ? 'w-6 bg-primary-600 dark:bg-primary-400'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
