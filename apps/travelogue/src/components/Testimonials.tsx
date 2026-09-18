const testimonials = [
  {
    quote:
      'An incredible experience from start to finish. The team planned every detail perfectly and we had the trip of a lifetime.',
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
  },
  {
    quote:
      'Professional, attentive, and truly passionate about travel. They turned our dream vacation into reality.',
    name: 'Michael Chen',
    role: 'Adventure Enthusiast',
  },
  {
    quote:
      'Best travel agency we have ever worked with. Every destination they recommended exceeded our expectations.',
    name: 'Emma Rodriguez',
    role: 'Family Vacationer',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-smoke">
          Hear from travelers who have explored the world with us
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-lg bg-mist p-6 dark:bg-gray-900">
              <p className="text-sm leading-relaxed text-smoke">"{t.quote}"</p>
              <div className="mt-5">
                <p className="font-display text-base font-semibold text-ink dark:text-white">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-primary-400">{t.role}</p>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
