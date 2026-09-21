import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'After just a few sessions, my chronic back pain was significantly reduced. The practitioners truly care about your well-being.',
    name: 'Sarah Mitchell',
    role: 'Patient',
    avatar: 'https://picsum.photos/seed/needlecraft-t1/80/80',
  },
  {
    quote:
      'A wonderful experience from start to finish. The holistic approach helped me regain energy I thought I had lost.',
    name: 'James Cooper',
    role: 'Client',
    avatar: 'https://picsum.photos/seed/needlecraft-t2/80/80',
  },
  {
    quote:
      'Professional, calming, and effective. I recommend Needlecraft to anyone looking for natural wellness solutions.',
    name: 'Emily Brown',
    role: 'Patient',
    avatar: 'https://picsum.photos/seed/needlecraft-t3/80/80',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Testimonials
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-bold text-ink dark:text-white md:text-4xl">
          Happy Customers
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, avatar }) => (
            <div
              key={name}
              className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-950 dark:shadow-none"
            >
              <div className="mb-3 flex gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-mist dark:text-gray-400">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={avatar}
                  alt={name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">{name}</p>
                  <p className="text-xs text-mist dark:text-gray-500">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
