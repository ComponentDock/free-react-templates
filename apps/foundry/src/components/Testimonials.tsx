import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Andrew Field',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Foundry delivered our headquarters on time and on budget.',
  },
  {
    name: 'Mark Bubble',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. The engineering team was precise and a pleasure to work with.',
  },
  {
    name: 'Adam Smith',
    quote:
      'Far from the countries Vokalia and Consonantia, there live the blind texts. Our private apartment was finished ahead of schedule with flawless quality.',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Clients</p>
        <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
          What Our Client Says
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border border-line bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
            >
              <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 font-display text-lg font-bold uppercase text-ink dark:text-white">
                {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
