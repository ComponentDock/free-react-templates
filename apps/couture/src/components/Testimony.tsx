import { Quote } from 'lucide-react'

export function Testimony() {
  return (
    <section className="bg-cream py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-ink dark:text-white">
          Testimony
        </h2>
        <Quote className="mx-auto mt-8 h-8 w-8 text-brand" aria-hidden="true" />
        <blockquote className="mt-4 text-lg italic text-ink/80 dark:text-gray-300">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </blockquote>
        <p className="mt-6 font-display text-sm uppercase tracking-widest text-ink dark:text-white">
          Roger Scott
        </p>
        <p className="mt-1 text-xs uppercase tracking-widest text-mist">Customer</p>
      </div>
    </section>
  )
}
