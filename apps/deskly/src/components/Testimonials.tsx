import { Quote, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Deskly changed how our startup works. The private office gave us room to grow, and the community events helped us find our first three clients.',
    name: 'Maya Chen',
    role: 'Co-founder, Loopcraft',
  },
  {
    quote:
      'I bounced between coffee shops for two years. A dedicated desk here costs less than my latte habit and the WiFi has never dropped once.',
    name: 'Diego Alvarez',
    role: 'Freelance Developer',
  },
  {
    quote:
      'The amenities list is not marketing fluff — the showers, bike storage, and 24/7 access genuinely make this the easiest place to work in Austin.',
    name: 'Sarah Kim',
    role: 'Product Designer',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Members Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hundreds of members call Deskly home. Here is why they stay.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-primary-600" aria-hidden="true" />
              <div className="mt-4 flex gap-1" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-primary-500 text-primary-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-gray-200 pt-5 dark:border-gray-800">
                <p className="font-display font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
