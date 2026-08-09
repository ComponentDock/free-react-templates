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
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-black text-ink">
          Customer Testimony
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="rounded-xl bg-white p-6 shadow-sm">
              <Quote className="h-8 w-8 text-brand/40" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-mist">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display text-sm font-black text-white">
                  {initials(testimonial.name)}
                </span>
                <span className="font-display text-sm font-bold text-ink">{testimonial.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
