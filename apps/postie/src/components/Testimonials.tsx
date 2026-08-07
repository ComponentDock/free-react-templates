const testimonials = [
  {
    quote:
      'Postie completely replaced our office mail setup — faster, cleaner, and a joy to use every day.',
    name: 'Jordan Lee',
    role: 'Product Designer',
  },
  {
    quote:
      'The best mail app we have tried. Setup took minutes and the whole team switched over in a week.',
    name: 'Sam Rivera',
    role: 'Engineering Lead',
  },
  {
    quote: 'Reliable, secure, and beautifully simple. Our support team lives inside Postie now.',
    name: 'Taylor Kim',
    role: 'Support Manager',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-primary-50/50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
            1 Million+ Users Can&apos;t Be Wrong.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-primary-100 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
            >
              <blockquote className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-display font-semibold text-ink dark:text-gray-100">
                  {testimonial.name}
                </div>
                <div className="mt-1 text-sm text-primary-400">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
