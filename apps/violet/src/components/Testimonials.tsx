import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="bg-primary-50/50 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
          They are the best
        </h2>
        <div className="mt-10 rounded-3xl bg-white p-10 shadow-lg dark:bg-gray-950">
          <Quote className="mx-auto h-8 w-8 text-primary-400" aria-hidden="true" />
          <blockquote className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </blockquote>
          <div className="mt-8">
            <div className="font-display text-lg font-semibold text-ink dark:text-gray-100">
              Chriss Turner
            </div>
            <div className="mt-1 text-sm text-smoke dark:text-gray-400">CEO Enterprise</div>
          </div>
        </div>
      </div>
    </section>
  )
}
