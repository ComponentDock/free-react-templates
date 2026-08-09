const quotes = [
  {
    text: 'The best barbershop experience in town. Daniel took his time, listened, and gave me exactly the cut I described — plus a hot towel shave that sealed the deal.',
    author: 'Nihare Edersen',
  },
  {
    text: 'I have been coming to Sienna for a year now and I will not go anywhere else. Consistent, precise, and genuinely friendly staff.',
    author: 'Marco Bentley',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            What Clients Say
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Testimonials
          </h2>
        </div>
        <div className="mt-12 space-y-6">
          {quotes.map((quote) => (
            <figure
              key={quote.author}
              className="rounded-2xl border border-gray-100 bg-paper p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <blockquote className="text-base leading-relaxed text-mist dark:text-gray-300">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-white">
                  {quote.author
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-ink dark:text-white">
                  {quote.author}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
