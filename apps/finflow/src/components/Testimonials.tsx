const testimonials = [
  {
    quote:
      'Finflow transformed the way I manage my finances. Their expert advice helped me save significantly.',
    name: 'Sarah Johnson',
    seed: 'finflow-testimonial-1',
  },
  {
    quote:
      'The banking solutions are top-notch. I love the seamless online experience and secure transactions.',
    name: 'Michael Chen',
    seed: 'finflow-testimonial-2',
  },
  {
    quote:
      'Professional team that truly cares about your financial success. Highly recommended for businesses.',
    name: 'Emily Rodriguez',
    seed: 'finflow-testimonial-3',
  },
  {
    quote:
      'Their investment strategies have given me confidence in my financial future. Outstanding service.',
    name: 'David Kim',
    seed: 'finflow-testimonial-4',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Happy Customers
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-paper p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <p className="text-sm leading-relaxed text-mist dark:text-gray-400">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={`Photo of ${t.name}`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="font-bold text-ink dark:text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
