import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    role: 'Customer',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Emily Watson',
    role: 'Customer',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Michael Stone',
    role: 'Customer',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-ink dark:text-white lg:text-5xl">
            People Say About Our Barber
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl bg-paper p-8 transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-300">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 font-display text-lg font-semibold uppercase text-ink dark:text-white">
                {item.name}
                <span className="mt-0.5 block text-sm font-normal normal-case text-brand">
                  {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
