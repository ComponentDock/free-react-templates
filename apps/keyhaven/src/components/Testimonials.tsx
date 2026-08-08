import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Testimonial {
  quote: string
  property: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Sarah made our dream of owning a Manhattan penthouse a reality. Her expertise and dedication throughout the process was exceptional.',
    property: 'Manhattan Penthouse',
    name: 'David & Emma Thompson',
    role: 'Homeowners',
  },
  {
    quote:
      'Michael found us incredible investment opportunities across Brooklyn. His market knowledge and honest advice made all the difference.',
    property: 'Multiple Properties',
    name: 'Robert Chen',
    role: 'Investor',
  },
  {
    quote:
      'As first-time buyers we were nervous, but Jennifer guided us through every step. We found our dream condo in Brooklyn.',
    property: 'Brooklyn Condo',
    name: 'Sofia Martinez',
    role: 'First-time Buyer',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Hear from homeowners who found their perfect property with us.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={cn(
                'relative rounded-2xl p-8',
                index === 0 ? 'bg-white shadow-md dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900',
              )}
            >
              <Quote
                className="absolute right-8 top-8 h-10 w-10 text-primary-100 dark:text-primary-900/40"
                aria-hidden="true"
              />
              <blockquote className="mt-6 text-gray-700 dark:text-gray-300">
                {testimonial.quote}
              </blockquote>
              <figcaption>
                <p className="mt-4 text-sm font-medium text-primary-600">{testimonial.property}</p>
                <div className="mt-6 flex items-center gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <img
                    src={`https://picsum.photos/seed/keyhaven-${testimonial.name.toLowerCase().replace(/[^a-z]+/g, '-')}/100/100`}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
