import { Quote as QuoteIcon } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Lara Jimenez',
    role: 'Property Developer',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Michael Chen',
    role: 'Interior Designer',
  },
] as const

export function Testimonials() {
  return (
    <section id="team" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand">
          Testimonial
        </p>
        <h2 className="mt-3 text-center text-4xl font-extralight leading-tight text-ink dark:text-white">
          Happy Clients
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-950"
            >
              <QuoteIcon
                className="h-8 w-8 text-brand"
                aria-hidden="true"
                fill="currentColor"
                strokeWidth={0}
              />
              <blockquote className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-300">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-bold text-ink dark:text-white">{testimonial.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
