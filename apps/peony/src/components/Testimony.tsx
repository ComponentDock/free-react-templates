import { Quote } from 'lucide-react'

export function Testimony() {
  return (
    <section id="testimony" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          Testimonial
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Happy Customer
        </h2>
        <figure className="mt-10 rounded-2xl border border-plum/10 bg-white p-8 dark:border-white/10 dark:bg-gray-950">
          <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
          <blockquote className="mt-4 text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </blockquote>
          <figcaption className="mt-6 font-display text-lg font-semibold">Jeff Nucci</figcaption>
        </figure>
      </div>
    </section>
  )
}
