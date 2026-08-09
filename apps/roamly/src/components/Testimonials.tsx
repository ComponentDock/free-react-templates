import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Our trip to Bali was absolutely magical. Every detail was perfectly planned, and the local guides were exceptional. This was the trip of a lifetime!',
    name: 'Sarah Mitchell',
    role: 'Adventure Traveler',
    traveledTo: 'Traveled to Bali, Indonesia',
  },
  {
    quote:
      'The Greek islands exceeded every expectation. The Santorini sunset cruise alone was worth the entire journey — flawlessly organized from start to finish.',
    name: 'James Carter',
    role: 'Backpacker',
    traveledTo: 'Traveled to Santorini, Greece',
  },
  {
    quote:
      'Machu Picchu at sunrise was the most breathtaking moment of my life. The team handled every detail so I could simply soak in the wonder.',
    name: 'Elena Rodriguez',
    role: 'Photography Enthusiast',
    traveledTo: 'Traveled to Machu Picchu, Peru',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 lg:py-28 dark:bg-gray-950"
      aria-label="Traveler testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Travelers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Real stories from adventurers who trusted us with their dream vacations.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
            >
              <div
                className="flex items-center gap-0.5 text-amber-400"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
                >
                  {testimonial.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-base font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </span>
                  <span className="block text-xs font-medium text-primary-600 dark:text-primary-400">
                    {testimonial.traveledTo}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
