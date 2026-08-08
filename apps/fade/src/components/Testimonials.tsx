const testimonials = [
  {
    quote:
      "Best barbershop in Brooklyn, hands down. Marcus always nails my fade. I've been coming here for three years and never once left disappointed.",
    name: 'Derek Williams',
    role: 'Client for 3 years',
    initial: 'D',
  },
  {
    quote:
      "The hot towel shave from Jake is an experience every man should have. It's the perfect way to start a weekend. Premium service all the way.",
    name: 'Chris Martinez',
    role: 'Monthly regular',
    initial: 'C',
  },
  {
    quote:
      'I tried at least five barbers before finding Fade. Tony understood exactly what I wanted with my hair texture. Finally found my go-to spot.',
    name: 'Kevin Tran',
    role: 'Client for 2 years',
    initial: 'K',
  },
  {
    quote:
      'Brought my 8-year-old son here for his first real haircut. The guys were so patient and made it fun for him. Now he actually asks to go to the barber!',
    name: 'James Patterson',
    role: 'Father of 2',
    initial: 'J',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Hear from the guys who trust Fade with their look.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <blockquote className="text-lg font-medium leading-relaxed text-gray-900 dark:text-white">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 font-bold text-accent-700 dark:bg-accent-900/50 dark:text-accent-300"
                >
                  {testimonial.initial}
                </span>
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
