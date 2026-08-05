import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Appli helped us personalize every step of the journey — the templates look exactly like the product we dreamed of.',
    name: 'Robert Brown',
    role: 'Creative designer',
  },
  {
    quote:
      'The gradient landing page gave our launch a premium feel. Every section is polished, responsive, and easy to customize.',
    name: 'Sarah Mitchell',
    role: 'Product lead',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy dark:text-white sm:text-4xl">
            Amazing customer review
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            In the old days, your website was the same for everyone. Not anymore. Experiences lets
            you adapt your website for every audience.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900"
            >
              <Quote className="h-10 w-10 text-primary-200" aria-hidden="true" />
              <blockquote className="mt-4 leading-relaxed text-muted dark:text-gray-400">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6">
                <span className="font-display text-lg font-bold text-navy dark:text-white">
                  {testimonial.name}
                </span>
                <p className="text-sm text-muted dark:text-gray-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
