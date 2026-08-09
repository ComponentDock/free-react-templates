import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Mike Fisher',
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Jean Stanley',
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Katie Rose',
  },
] as const

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Top Client Says
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {initials(item.name)}
              </span>
              <Quote className="mx-auto mt-5 h-7 w-7 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-300">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 font-display text-lg font-semibold text-ink dark:text-white">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
