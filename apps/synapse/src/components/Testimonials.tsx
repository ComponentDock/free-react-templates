import { Quote, Star } from 'lucide-react'

const quotes = [
  {
    text: 'Accessories here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.',
    author: 'Mark Alviro Wiens',
    role: 'CEO, Tech Corp',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Lina Watson',
    role: 'Product Manager, Startup',
  },
  {
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Andy Smith',
    role: 'Founder, Agency',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Feedback from Customers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {quotes.map((quote) => (
            <figure
              key={quote.author}
              className="rounded-2xl border border-gray-100 bg-paper p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-7 w-7 text-primary-500" aria-hidden="true" />
              <div
                className="mt-4 flex gap-1 text-accent-500"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {quote.text}
              </blockquote>
              <figcaption className="mt-5">
                <span className="block font-display text-sm font-bold text-ink dark:text-white">
                  {quote.author}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{quote.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
