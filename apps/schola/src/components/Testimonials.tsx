import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The Full-Stack React course completely changed my career trajectory. I went from a junior developer to landing a role at Spotify within 6 months. Elena explains complex concepts so clearly.',
    name: 'David Park',
    role: 'Software Engineer at Spotify',
    seed: 'schola-david',
  },
  {
    quote:
      "Marcus's design system workshop was exactly what I needed. I built a complete system for our startup and got promoted to lead designer. The component architecture section alone was worth the price.",
    name: 'Sophie Williams',
    role: 'Product Designer at Airbnb',
    seed: 'schola-sophie',
  },
  {
    quote:
      "Dr. Chen's ML bootcamp is the most comprehensive course I've taken. The hands-on projects helped me build a portfolio that stood out. Now I'm working on autonomous vehicle systems at Tesla.",
    name: 'Ahmed Hassan',
    role: 'Data Scientist at Tesla',
    seed: 'schola-ahmed',
  },
  {
    quote:
      "James's growth course gave me frameworks I use every single day. The viral loops section helped us double our user acquisition. Practical, no-fluff content from someone who's actually done it.",
    name: 'Rachel Kim',
    role: 'Growth Lead at Notion',
    seed: 'schola-rachel',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-gray-100/50 py-20 dark:bg-gray-900/50 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What Our Learners Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of professionals who've accelerated their careers with Schola.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="card-hover rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-6 w-6 text-primary-500" aria-hidden="true" />
              <blockquote className="mt-3 text-gray-700 dark:text-gray-300">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${testimonial.seed}/48/48`}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
