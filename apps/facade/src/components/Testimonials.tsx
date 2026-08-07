import { Card } from '@free-react-templates/ui'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Danyel Yarde',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Manel djuice',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    name: 'Mark Alviro Wiens',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonial" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Testimonials
          </p>
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            Happy Clients
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="rounded-none border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Quote className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
                {testimonial.quote}
              </p>
              <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
                {testimonial.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                CEO &amp; Founder
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
