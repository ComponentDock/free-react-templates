const testimonials = [
  {
    quote:
      'Stratos cut our deployment time from 30 minutes to 30 seconds. The Git integration is seamless and the DX is unmatched.',
    name: 'Sarah Chen',
    role: 'CTO, DataStream',
    avatar: 'https://picsum.photos/seed/stratos-1/96/96',
  },
  {
    quote:
      'We migrated from AWS and our infrastructure costs dropped 40%. The managed databases are incredibly reliable with zero maintenance overhead.',
    name: 'Marcus Rodriguez',
    role: 'Lead Engineer, Fintech Labs',
    avatar: 'https://picsum.photos/seed/stratos-2/96/96',
  },
  {
    quote:
      'The edge functions are a game changer. Our API response times went from 200ms to under 50ms globally. Our users noticed immediately.',
    name: 'Aisha Patel',
    role: 'VP Engineering, NovaTech',
    avatar: 'https://picsum.photos/seed/stratos-3/96/96',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Loved by Developers
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            See what engineering teams around the world say about building on Stratos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800"
            >
              <blockquote className="text-base leading-relaxed text-gray-900 dark:text-gray-100">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`Portrait of ${testimonial.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
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
