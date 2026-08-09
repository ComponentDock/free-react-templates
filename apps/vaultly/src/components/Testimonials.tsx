import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Finley helped me pay off $30,000 in credit card debt in just 18 months. The AI insights were spot-on and the automated savings plan kept me on track.',
    name: 'Sarah Chen',
    role: 'Small Business Owner',
  },
  {
    quote:
      'I was skeptical about AI financial advice, but Finley\u2019s portfolio rebalancing outperformed my old advisor two years running. Worth every penny.',
    name: 'Marcus Johnson',
    role: 'Software Engineer',
  },
  {
    quote:
      'Finley walked me through buying my first home — from down payment planning to closing. It felt like having a financial expert in my corner 24/7.',
    name: 'Emily Rodriguez',
    role: 'First-Time Homebuyer',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Loved by 150,000+ Users
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Real stories from people who took control of their finances with Finley.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 text-base font-bold text-white"
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
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
