import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="review" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-primary-600" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Testimonial
        </h2>
        <blockquote className="mt-6 text-lg leading-relaxed text-muted dark:text-gray-300">
          Appson helped us ship our product weeks ahead of schedule, and the support team has been
          phenomenal from day one.
        </blockquote>

        <img
          src="https://picsum.photos/seed/appson-customer/96/96"
          alt="John Deo avatar"
          className="mx-auto mt-8 h-16 w-16 rounded-full border-2 border-primary-600 object-cover"
        />
        <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">
          John Deo
        </h3>
        <p className="mt-1 text-sm text-muted dark:text-gray-400">CEO Of iphone</p>
      </div>
    </section>
  )
}
