import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Elevate isn't just a youth group—it's family. I found real friends here who actually care about my faith journey.",
    name: 'Emma T.',
    grade: '11th Grade',
  },
  {
    quote:
      'I was skeptical about church, but the leaders here are real. They don\u2019t pretend to have all the answers.',
    name: 'Jordan M.',
    grade: '10th Grade',
  },
  {
    quote:
      'Small groups changed everything for me. Having older guys invest in my life helped me become who I am today.',
    name: 'Chris L.',
    grade: '12th Grade',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-navy-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
            Real Stories
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-gray-900 dark:text-white md:text-5xl">
            What Students Say
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 dark:border-navy-700 dark:bg-navy-800"
            >
              <Quote className="h-8 w-8 text-primary-400" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-accent-400 text-accent-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-gray-100 pt-4 dark:border-navy-700">
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.grade}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
