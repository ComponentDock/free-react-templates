import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    author: 'James Anderson',
    role: 'Facebook, Product Lead',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live right at the coast of the Semantics.',
    author: 'Emma Rodriguez',
    role: 'Twitter, Marketing Manager',
  },
  {
    quote:
      'The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.',
    author: 'Michael Chen',
    role: 'Google, Product Designer',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Our Customers Feedback
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Real words from teams who launch with us every day.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-2xl border border-gray-100 bg-paper p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-primary-500" aria-hidden="true" />
              <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display font-semibold text-ink dark:text-white">
                  {testimonial.author}
                </p>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
