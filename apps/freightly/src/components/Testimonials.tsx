import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Freightly has transformed our supply chain. On-time performance is exceptional and the tracking dashboard keeps our whole team in the loop.',
    author: 'Michael Chen',
    role: 'VP of Operations, TechFlow Inc.',
  },
  {
    quote:
      'Their customs team handled our most complex import with zero delays. Communication was clear at every single step.',
    author: 'Sarah Martinez',
    role: 'Import Manager, Nordica Retail',
  },
  {
    quote:
      'Reliable, transparent, and fast. Freightly ships our exports across three continents without a hitch.',
    author: 'David Okonkwo',
    role: 'CEO, AfriTrade Exports',
  },
]

const certifications = ['ISO 9001 Certified', 'IATA Member', 'C-TPAT', 'WCA Member']

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Testimonials
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Trusted by Industry Leaders
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Thousands of businesses ship with Freightly every day. Here is what a few of them say.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-primary-500" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-gray-200 pt-4 dark:border-gray-800">
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          {certifications.map((certification) => (
            <span
              key={certification}
              className="rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            >
              {certification}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
