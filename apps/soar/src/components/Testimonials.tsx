import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Customer Says
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Our satisfied customer says
          </h2>
        </div>
        <figure className="mx-auto mt-14 max-w-3xl rounded-xl bg-white p-10 text-center shadow-sm dark:bg-gray-950">
          <Quote className="mx-auto h-10 w-10 text-primary-400" aria-hidden="true" />
          <blockquote className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics.
          </blockquote>
          <figcaption className="mt-8">
            <div className="font-display text-lg font-semibold text-gray-900 dark:text-gray-100">
              Dennis Green
            </div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Marketing Manager</div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
