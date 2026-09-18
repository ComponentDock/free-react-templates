import { Quote as QuoteIcon } from 'lucide-react'

export function Quote() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <blockquote className="font-heading text-xl italic leading-relaxed text-ink sm:text-2xl">
          "Wherever the bishop appears, there let the people be, even as wheresoever Christ Jesus
          is, there is the catholic church."
        </blockquote>
        <QuoteIcon className="mx-auto mt-6 h-8 w-8 text-brand" aria-hidden="true" />
        <cite className="mt-4 block text-sm font-semibold text-mist not-italic">
          Ignatius of Antioch
        </cite>
      </div>
    </section>
  )
}
