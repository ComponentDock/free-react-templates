import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'I started the crypto course with zero experience. Eight months later I quit my job and trade full time. The mentor review sessions are worth the price alone.',
    name: 'David Okafor',
    role: 'Full-time trader, Lagos',
    avatar: 'https://picsum.photos/seed/ticker-15/200/200',
  },
  {
    quote:
      'The risk management module changed everything. I finally have a system that survives red months — my drawdowns went from 40% to under 8%.',
    name: 'Priya Sharma',
    role: 'Options trader, Mumbai',
    avatar: 'https://picsum.photos/seed/ticker-16/200/200',
  },
  {
    quote:
      'Sarah Chen is the best macro educator I have ever come across. The weekly live trading room alone paid for the membership in the first month.',
    name: 'Lucas Meyer',
    role: 'Swing trader, Berlin',
    avatar: 'https://picsum.photos/seed/ticker-17/200/200',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Traders Who Changed Their Lives
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Real students, real accounts, verified results.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-primary-500/40" aria-hidden="true" />
              <div className="mt-3 flex items-center gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} portrait`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
