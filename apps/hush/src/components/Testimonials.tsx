import { Quote } from 'lucide-react'
import { Reveal } from './Reveal'

const testimonials = [
  {
    quote:
      'After a 5-day silent retreat I came home lighter than I have felt in years. The stillness did what no amount of busyness could.',
    name: 'Michael Torres',
    context: 'After a 5-day silent retreat',
  },
  {
    quote:
      'My director listens with such patience. Months of ongoing spiritual direction have slowly reordered my whole life.',
    name: 'Jennifer Walsh',
    context: 'Ongoing spiritual direction',
  },
  {
    quote:
      'The chapel at Compline is the most peaceful place I know. I drive an hour every month just to sit there.',
    name: 'Ruth Alvarado',
    context: 'Monthly visitor since 2019',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-stone-100 py-20 lg:py-28 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Stories
          </p>
          <h2 className="font-heading mt-3 text-3xl font-light text-stone-900 sm:text-4xl lg:text-5xl dark:text-white">
            Transformed by Stillness
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 80}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-soft dark:bg-stone-950"
            >
              <Quote
                className="h-8 w-8 text-primary-200 dark:text-primary-900"
                aria-hidden="true"
              />
              <blockquote className="mt-4 flex-1 leading-relaxed text-stone-700 dark:text-stone-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-heading text-lg font-semibold text-stone-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-sm text-stone-500 dark:text-stone-400">
                  {testimonial.context}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
