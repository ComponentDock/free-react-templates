const testimonials = [
  {
    quote:
      'Cortex cut our agent development time from weeks to hours. The orchestration layer handles all the complexity so we can focus on business logic.',
    name: 'Sarah Chen',
    role: 'CTO, DataPilot AI',
  },
  {
    quote:
      'We migrated from a custom LangChain setup to Cortex and immediately saw 40% lower latency and a fraction of the maintenance burden.',
    name: 'Marcus Webb',
    role: 'Head of Engineering, Northwind Labs',
  },
]

export function SocialProof() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Trusted by AI Teams Everywhere
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            See how engineering teams are building production AI agents with Cortex.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 font-bold text-white"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
