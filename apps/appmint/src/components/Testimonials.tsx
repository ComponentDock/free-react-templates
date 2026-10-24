import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Rapidiously monetize market-driven web services. Completely synthesize end-to-end models and emerging niches. Continually visualize long-term high-impact niches.',
    author: 'Sofiya Rahman',
    role: 'Product Manager, AppLabs',
  },
  {
    quote:
      'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains.',
    author: 'Jason Doe',
    role: 'Founder, Pixelworks',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            Testimonials
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            What&apos;s say our Clients
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-teal" aria-hidden="true" />
              <blockquote className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display font-semibold text-ink dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
