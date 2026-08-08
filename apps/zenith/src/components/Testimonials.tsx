import { Star } from 'lucide-react'
import { Reveal } from './Reveal'

const testimonials = [
  {
    quote:
      "Zenith has transformed how our team works. We've cut our deployment time by 60% and haven't looked back.",
    name: 'Sarah Chen',
    role: 'CTO, TechFlow',
    initial: 'S',
  },
  {
    quote:
      'The automation features alone saved us 20+ hours per week. The ROI was evident within the first month.',
    name: 'Marcus Johnson',
    role: 'Head of Engineering, DataSync',
    initial: 'M',
  },
  {
    quote:
      'Best-in-class support and a product that actually delivers on its promises. Highly recommended.',
    name: 'Emily Rodriguez',
    role: 'Product Manager, CloudBase',
    initial: 'E',
  },
] as const

function StarRow() {
  return (
    <div role="img" aria-label="5 out of 5 stars" className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Loved by teams worldwide
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            See what our customers have to say about their experience.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 100}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-950"
            >
              <StarRow />
              <blockquote className="mt-4 flex-1 text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-base font-semibold text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                  {testimonial.initial}
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
