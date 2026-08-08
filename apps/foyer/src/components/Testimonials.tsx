import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Hypnosis quit smoking methods maintain caused quite world over the last two decades. There is a lot of argument pertaining to',
    name: 'Mark Alviro Wiens',
    role: 'CEO, Interior Co.',
  },
  {
    quote:
      'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware.',
    name: 'Lina Harrington',
    role: 'Client, Dream Home',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[3px] text-brand">Reviews</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Testimonial from our Clients
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-lg bg-paper p-8 dark:bg-gray-900">
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-white/70">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/foyer-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}/64/64`}
                  alt={`Portrait of ${testimonial.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-bold text-ink dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wide text-brand">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
