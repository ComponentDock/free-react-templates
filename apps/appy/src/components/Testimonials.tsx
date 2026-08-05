import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="review" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-muted">Testimonials</p>
        <Quote className="mx-auto mt-4 h-10 w-10 text-primary-600" aria-hidden="true" />
        <h2 className="mt-6 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Our Clients Love Us
        </h2>
        <blockquote className="mt-6 text-lg leading-relaxed text-muted dark:text-gray-300">
          Appy gave our product the landing page it deserved — clean, fast, and effortless to
          launch. Our downloads doubled within the first month.
        </blockquote>

        <img
          src="https://picsum.photos/seed/appy-customer/96/96"
          alt="Ashekur Rahman avatar"
          className="mx-auto mt-8 h-16 w-16 rounded-full border-2 border-primary-600 object-cover"
        />
        <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">
          Ashekur Rahman
        </h3>
        <p className="mt-1 text-sm text-muted dark:text-gray-400">Art Director</p>
      </div>
    </section>
  )
}
