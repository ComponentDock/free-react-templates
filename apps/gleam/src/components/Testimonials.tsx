import { Quote } from 'lucide-react'
import { Reveal } from './Reveal'

const testimonials = [
  {
    quote:
      'Gleam transformed our home. I came back from work to find every surface gleaming. They even got behind the fridge, which I never manage to do myself. Absolutely worth every penny.',
    name: 'Sarah Mitchell',
    role: 'Homeowner, 2 years',
  },
  {
    quote:
      'We switched to Gleam for our office and the difference is night and day. The team is professional, punctual, and thorough. Our employees have actually commented on how clean the office is now.',
    name: 'David Chen',
    role: 'Office Manager',
  },
  {
    quote:
      'I booked their move-out cleaning service and got my full security deposit back. They cleaned things I did not even know were dirty. Highly recommended for anyone moving out of a rental.',
    name: 'Jessica Rodriguez',
    role: 'Apartment Renter',
  },
  {
    quote:
      'As a busy mom of three, having Gleam come every two weeks is a lifesaver. I love that they use eco-friendly products so I do not have to worry about chemicals around my kids.',
    name: 'Amanda Foster',
    role: 'Busy Parent',
  },
  {
    quote:
      'Their post-construction cleaning was incredible. After our kitchen renovation, there was dust everywhere. The Gleam team had the whole house spotless in just one day.',
    name: 'Michael Torres',
    role: 'Homeowner',
  },
  {
    quote:
      'We have been using Gleam for our restaurant for over a year. They work around our schedule and the kitchen passes every health inspection with flying colors.',
    name: 'Linda Park',
    role: 'Restaurant Owner',
  },
] as const

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600">
            Reviews
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Hear from real clients about their experience with Gleam.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                <Quote
                  className="h-6 w-6 text-primary-500 dark:text-primary-400"
                  aria-hidden="true"
                />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                    {initials(testimonial.name)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
