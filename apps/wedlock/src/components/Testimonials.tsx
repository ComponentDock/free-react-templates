import { Quote } from 'lucide-react'

const testimonials = [
  {
    couple: 'Emma & James',
    quote: 'Wedlock planned every detail of our perfect day — we simply showed up and celebrated.',
  },
  {
    couple: 'Sofia & Daniel',
    quote:
      'They turned our vision into the dream wedding we had always imagined, down to the last candle.',
  },
  {
    couple: 'Mia & Oliver',
    quote:
      'Every detail was handled with such care and warmth. Our families are still talking about it.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-mauve-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-serif text-4xl font-bold text-ink-900 sm:text-5xl">
          Feedback from our happy couples
        </h1>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.couple} className="rounded-lg bg-white p-8 shadow-sm">
              <Quote className="h-8 w-8 text-accent-500" aria-hidden="true" />
              <blockquote className="mt-4 text-stone-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-serif text-lg font-semibold text-ink-900">
                {testimonial.couple}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
