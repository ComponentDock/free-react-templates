import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    role: 'Marketing Manager',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    role: 'Interface Designer',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    role: 'UI Designer',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Customer Says
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Our satisfied customer says
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.role} className="rounded-xl bg-gray-50 p-8 dark:bg-gray-900">
              <Quote className="h-8 w-8 text-primary-300" aria-hidden="true" />
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold text-gray-900 dark:text-gray-100">Dennis Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
